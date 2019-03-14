import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './scss/collect.scss';
class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      flag: true
    }
  }
  componentWillMount () {
    let list = JSON.parse(localStorage.getItem('shoucang'))
    console.log(list)
    this.setState ({
      list: list
    })
  }

  render () {
    let Html;
    if (this.state.list === null) {
     Html = <div>
      <NavLink to = "/small" className="collect" id="coll">
        <span>去收藏</span>
      </NavLink>
    </div>;
    } else {
    Html = 
    // <div>
    //   <NavLink to = "/total" className="collect" id="coll">
    //     <span>去收藏</span>
    //   </NavLink>
    // </div>;
    Html = <ul className="movielist">
      {
        this.state.list.map((item, index) => {
          return (
            <NavLink to = { '/detail/small/' + item.id } key = { index }>
              <div className="poster">
                <img src={ item.img } alt={ item.alt } />
              </div>
              <div className="info">
                <h3 className="title">{ item.title }</h3>
                <p className="author">{ item.userData.username }</p>
                <div className="other">
                  <span data-v-2cc45cae="">{ item.section.length }小节</span>
                  <span className="dot">·</span>
                  <span>{ item.buyCount }人已收藏</span>
                </div> 
              </div>
            </NavLink>
          )
        })
      }
    </ul>;
    }
    
    return (
      <div className = "content">
        <div className="cont">
          {/* {this.state.flag === false ? Html : aaa} */}
          {Html}
        </div>
      </div>
    )
  }

}

export default Com
