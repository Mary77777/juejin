import React, { Component } from 'react'
import Comment from '@/components/kind/comment'

class CommentList extends Component {
  constructor(porps) {
    super(porps)
    this.state ={
      comments: []
    }
  }
  commentDidMount () {
    console.log(this)
    this.setState({
    })
  }
  render() {
    return (
    <div>
        { this.props.comments.map((comment, i) =>
            <Comment comment={comment} key={i}/>    
        )}
    </div>
    )
  }
}

export default CommentList