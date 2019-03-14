import React, { Component } from 'react';
import api from '@/api/cartDetail/index';

import '../components/cart/cartDetail'
class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // eventUrl: '',
            // title: '',
            // content: '',
            // screenshot: ''
            list: []

        }
    }
    componentDidMount() {
         const id = this.props.match.params.id
        // console.log(this.props.match.params.id)
        api.requestlist(id).then(data => {
            
            for(var i in data) {
                if (id === data[i]._id) {
                    this.setState({
                        eventUrl: data[i].eventUrl,
                        title: data[i].title,
                        content: data[i].content,
                        screenshot: data[i].screenshot
                    })
                }
            }
            this.setState({
                list: data

            })
            console.log(data)
        })
    }
    render() {
        return(
            <div className = "content">
                <div className="title">
                    <h1>{this.state.title}</h1>
                </div>
                <div className="mycenter">
                    <img className="myfirstimg" src={this.state.screenshot} alt=""/>
                </div>
                <div className="myfooter">
                    <p>{this.state.content}</p>
                    <span>{this.state.category}</span>
                    <b>{this.state.city}</b>

                </div>

            </div>
        )
    }
}
export default Com
