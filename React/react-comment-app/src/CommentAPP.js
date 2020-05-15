import React, { Component } from 'react'; // 按需加载 es6 解构
import CommentInput from './CommentInput'
import CommentList from './CommentList'
// let { a } = {a:1, b:2, c:3}
// react facebook 高级 OO
class CommentAPP extends Component {
    constructor() {
        super();
        this.state = {
            comments: [{
                username: 'zc',
                content: 'sagajaouih'
            }, {
                username: 'cc',
                content: 'asftatg'
            }]
        }
    }
    render() { // 接口
        const { comments } = this.state;
        return (
            <div className="wrapper">
                {/* props */}
                {/* react 组件 render 页面输出, state 内部数据 props 外部数据 */}
                {/* this.handleSubmitComment指向CommentInput 加.bind(this)指向对象的this.state */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                {/* 向父组件要什么? 1.静态页面 2.动态化的 state props 显示评论列表 */}
                <CommentList comments={comments}/>
            </div>
        )
    }
    handleSubmitComment(comment) {
        // console.log(comment);
        // let { comments } = this.state; // oldState
        // comments.unshift(comment); // newState
        // this.setState({
        //     comments: comments
        // })
        // console.log(comments, "++++++++");
        this.setState({
            comments: [comment, ...this.state.comments] // 展开运算符
        })
    }
}
export default CommentAPP;