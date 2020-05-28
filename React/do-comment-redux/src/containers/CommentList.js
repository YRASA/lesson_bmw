// UI
// 向中央仓库申请comments
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../component/CommentList';

class CommentListContainer extends Component {
    render() {
        // console.log(this.props.comments)
        return (
            <div>
                <CommentList
                    comments={this.props.comments}
                />
            </div>
        )
    }
}
// state是redux给你的 读操作
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onDeleteComment: (CommentIndex) => {
//             dispatch(deleteComment(CommentIndex))
//         }
//     }
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(CommentListContainer)