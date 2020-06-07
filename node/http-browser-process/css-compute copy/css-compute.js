const css = require('css');
let htmlStr = `
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <div class="wrap">
            <div class="main"></div>
            <div class="aside"></div>
        </div>
    </body>
</html>
`
let cssStr = `
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: rgb(255, 0, 0);
}
.main {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 255, 0);
}
.aside {
    width: 300px;
    height: 300px;
    background-color: rgb(0, 0, 255);
}
`
// KMP、正则 原理都是有限状态机FSM
// start-html end-html head body div
// 正则 split(): 完整的 html
// token: html tag
let rules = css.parse(cssStr).stylesheet.rules;
// console.log(JSON.stringify(rules, null, 2));
let currentToken = null;
let currentAttribute = null;
let stack = [{ type: 'document', children: [] }];
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
/**
 * {
              "type": "element",
              "children": [],
              "attributes": [
                {
                  "name": "a",
                  "value": "a"
                },
                {
                  "name": "b",
                  "value": "b"
                }
              ],
              "tagName": "img"
            },
 * 
 */
function match(selector, ele) {
    if (!selector || !ele.attributes) {
        return false;
    }
    if (selector.charAt(0) === '#') {
        let idAttr = ele.attributes.find(e => e.name === 'id');
        if (idAttr && idAttr.value === selector.replace('#', '')) return true;
    } else if (selector.charAt(0) === '.') {
        let classAttr = ele.attributes.find(e => e.name === 'class');
        if (classAttr && classAttr.value === selector.replace('.', '')) return true;
    } else {
        if (ele.tagName === selector) return true;
    }
    return false;
}
function computerCss(ele) {
    // 计算符合ele的所有css规则, css规则应用到这个节点上面
    // 1.靠ele属性父节点和css里面选择器匹配
    // 2.匹配 从后往前 .parent .cls
    // tagName #id .className
    // .parent .cls
    // div || div.cls || span #parentID .parent #id
    let elements = stack.slice(0).reverse();
    if (!ele.computerStyle) ele.computerStyle = {};
    // 所有 css 规则
    for (rule of rules) {
        let selector = rule.selectors[0].split(' ').reverse();
        // 最后一项匹配上了
        if (!match(selector[0], ele)) {
            // 跳过本轮循环, 往后的步骤
            continue;
        }
        // 看父级满不满足
        // [{type: ;doc}, {html}, {header}]
        // [.parent #parentID span]
        let j = 1;
        for (let i = 0; i < elements.length; i++) {
            if (match(selector[j], elements[i])) j++;
        }
        // 匹配
        if (j >= selector.length) {
            // rule rule css 规则添加到 ele
            for (let declare of rule.declarations) {
                const { property, value } = declare;
                ele.computerStyle[property] = value;
            }
        }
    }
}
function emit(token) {
    console.log(token);
    let top = stack[stack.length - 1];
    if (token.type === 'startTag') {
        // push pop 处理配对
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        // 开始标签解析完了
        // 知道 attributes, 知道父节点
        computerCss(element);
        stack.push(element);
        // 作为栈顶的元素子节点, 为了生成树
        // if (!top.children) top.children = [];
        top.children.push(element);
    } else if (token.type === 'endTag') {
        if (token.tagName !== top.tagName) {
            throw new Error('tagName match error')
        } else {
            stack.pop();
        }
    } else if (token.type === 'selfCloseToken') {
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        top.children.push(element);
    }
    currentToken = null;
}
function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}
function start(c) {
    if (c === '<') {
        return tagOpen;
    } else {
        return start;
    }
}
function tagOpen(c) {
    // <html>: html tag 由 a-zA-Z
    // </html>
    // h t m l
    // console.log(c);
    if (c === '/') {
        return endTagOpen;
    } else if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName;
    }
}
function tagName(c) {
    if (c.match(/[a-zA-Z]/)) {
        currentToken.tagName += c;
        return tagName;
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttributeName;
    } else if (c === '>') {
        // tag 拼接结束
        emit(currentToken);
        return start;
    }
}
function beforeAttributeName(c) {
    if (c === '/') {
        currentToken.type = 'selfCloseToken';
        return tagName;
    } else if (c.match(/[a-zA-Z]/)) {
        currentAttribute = {
            name: c,
            value: ''
        }
        return attributeName;
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttributeName;
    } else if (c === '>') {
        return tagName(c);
    }
}
function attributeName(c) {
    // class="cls"
    // ""
    if (c.match(/[a-zA-Z]/)) {
        currentAttribute.name += c;
        return attributeName;
    } else if (c === '=') {
        return attributeValue;
    }
}
function attributeValue(c) {
    // <div calss="cls" id="myid"></div>
    if (c === '\"') {
        // nothing
        return attributeValue;
    } else if (c.match(/[a-zA-Z]/)) {
        currentAttribute.value += c;
        return attributeValue;
    } else {
        // 空格 >
        // 消耗了
        if (!currentToken.attributes) currentToken.attributes = [];
        currentToken.attributes.push(currentAttribute);
        currentAttribute = null;
        // 代理
        // 本状态内部处理完毕了这个c, 下一个状态也要针对c进行处理
        return beforeAttributeName(c);
    }
}
function endTagOpen(c) {
    // </html>
    if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}
