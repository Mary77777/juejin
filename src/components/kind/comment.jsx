import React, { Component } from 'react';
class ComponentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    render() {
        return(
            <div className='comment'>
                <div className='comment-user'>
                <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}
export default ComponentInput