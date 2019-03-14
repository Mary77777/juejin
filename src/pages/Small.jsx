import React, { Component } from 'react'
import Lin from '@/components/small/Lin';
import { Tabs } from 'antd-mobile';
import api from '@/api/small';
import './scss/small';

const tabs = [
  { title: '全部' },
  { title: '前端' },
  { title: '后端' },
  { title: '移动开发' },
  { title: '区块链' },
  { title: '通用' }
]
class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      bannerdata: [],
      imgHeight: 100
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data)
      this.setState({
        list: data
      })
    })
    api.requestQianduanData().then(data => {
      // console.log(data)
      this.setState({
        list1: data
      })
    })
    api.requestHouduanData().then(data => {
      // console.log(data)
      this.setState({
        list2: data
      })
    })
    api.requestMobileData().then(data => {
      // console.log(data)
      this.setState({
        list3: data
      })
    })
    api.requestChainData().then(data => {
      // console.log(data)
      this.setState({
        list4: data
      })
    })
    api.requestCommonData().then(data => {
      // console.log(data)
      this.setState({
        list5: data
      })
    })
  }

  render () {
    // console.log(this)
    return (
      <div className = "box">
        <Tabs tabs={ tabs } initialPage={0} animated={false} useOnPan={false}>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list1 }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list2 }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list3 }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list4 }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
          <div className="lis">
            <div className="content">
              <Lin list = { this.state.list5 }/>
            </div>
            <div  className="cont">
              <div  className="cet"></div>
            </div>
          </div>
        </Tabs>
      </div>
    )
  }

}

export default Com
