- DOM document 文档就是网页,js内存里，文档对象模型
    js -> html 转化
    DOM JS 数据结构tree appendChild 组成一棵树
    ul>li>textnode
    document.dreateElement('') 标签节点
    document.createTextNode('') 文本节点

    哪怕是文字,都是节点,都是对象
    前端js, html, css
    js是王者,js可以操控html, css
    这些API是DOM API

面向业务编程
this.state.like true/false
1.分布
    动态like button 添加到页面上
    likeButton class 方便复用
    既要用html加速完成DOM 又要添加事件
- js this 指向
    this动态决定 由调用方式决定
    1.作为对象的方法调用,this指向对象本身
    2.作为事件函数,this指向事件发生的元素
    bind 可以强行绑定函数内部的this指向
    call 立即执行
- 封装 class 复用
    constructor 申明属性 this.state
    render() 渲染
    class LikeButton {
        constructor() {

        }
        render() {

        }
        changeLikeText() {}
    }
createDOMFronString要写到外面:
    createDOMFronString不属于LikeButton类,它是独立的