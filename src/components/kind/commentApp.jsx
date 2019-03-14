import React, { Component } from 'react'
import CommentInput from '@/components/kind/commentInput'
import CommentList from '@/components/kind/commentList'

class CommentApp extends Component {
  constructor(porps) {
    super(porps)
    this.state ={
      comments: []
    }
  }
    handleSubmitComment (comment) {
      console.log(comment)
      if(!comment) return
      if(!comment.username) return alert('请输入用户名')
      if(!comment.content) return alert('请输入评论内容')
     this.state.comments.push(comment)
     this.setState({
       comments: this.state.comments
     })
    }
 
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp