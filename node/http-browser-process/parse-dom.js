let htmlStr = `
<html>
    <head></head>
    <body>
        <div></div>
    </body>
</html>
`
// KMP、正则 原理都是有限状态机FSM
// start-html end-html head body div
// 正则 split(): 完整的 html
// token: html tag
let currentToken = null;
parse(htmlStr);
function emit(token) {
    console.log(token);
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
    } else if (c === '>') {
        // tag 拼接结束
        emit(currentToken);
        return start;
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
