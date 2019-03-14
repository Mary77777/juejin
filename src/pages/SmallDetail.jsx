import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
// import api from '@/api/smalldetail';
import axios from "axios"
import { Link } from 'react-router-dom';
import './scss/smalldetail.scss';

const tabs = [
  { title: '目录' },
  { title: '介绍' }
]
class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: '',
      img: '',
      userData: {},
      list: [],
      summaryHtml: ''
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    // console.log(id)
    axios.get('/juejin/total/detail?id='+id).then(data => {
      // console.log(data)
      this.setState({
        title: data.data.data[0].title,
        userData: data.data.data[0].userData,
        img: data.data.data[0].img,
        alt: data.data.data[0].alt,
        desc: data.data.data[0].desc,
        list: data.data.data[0].section,
        summaryHtml: data.data.data[0].summaryHtml
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <div className = "content">
          <div className="top">
            <div className="img"><img src = { this.state.img } alt = { this.state.alt } /></div>
            <div className="top-right">
              <p className="title">{ this.state.title }</p>
              <p className="desc">{ this.state.desc }</p>
              <div className="user">
                <img src= { this.state.userData.avatarHd } alt=""/>
                <span className="username">{ this.state.userData.username }</span>
              </div>
            </div>
          </div>
          <div className="bottom">
          <Tabs tabs={ tabs } initialPage={0} animated={false} useOnPan={false}>
            <div className="bot">
              <h2  className="little">小册内容</h2>
              <ul className="list">
                {
                  this.state.list.map((item, index) => {
                    return (
                      <Link to = { '/detail/' + item.id } key = { index } className="item">
                        <div className="num">{ index + 1 }</div>
                        <div className="li_right">
                          <p className="title-r">{ item.title }</p>
                          <p className="count">{ item.pv }次学习</p>
                        </div>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>
            <div  className="cont">
              <div dangerouslySetInnerHTML={{__html : this.state.summaryHtml}} className="cet"></div>
            </div>
          </Tabs>
            {/* <div>{ this.state.summaryHtml }</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Com
