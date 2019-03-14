import React, { Component } from 'react';
import api from '@/api/cart/index';
import '../components/cart/index';
import { Tabs, Badge } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
const tabs = [
  { title: <Badge>热门活动</Badge> },
  { title: <Badge>北京</Badge> },
  { title: <Badge>上海</Badge> },
  { title: <Badge>广州</Badge> },
  { title: <Badge>深圳</Badge> },
  { title: <Badge>杭州</Badge> },
];
class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hzlist: [],
            bjlist: [],
            shlist: [],
            gzlist: [],
            szlist: [],
            qtlist: [],
            data: ['1', '2', '3'],
            imgHeight: 176,
            banner: []
        }
    }

componentDidMount () {
  setTimeout(() => {
    this.setState({
      data: []
    });
  }, 100);
    api.requestlist().then(data => {
      // console.log(data)
        let bj = [];
        let sh = [];
        let gz = [];
        let sz = [];
        let hz = [];
        let qt = [];
      for(let i = 0; i < data.length; i++) {
        if(data[i].city === '杭州') {
          hz.push(data[i]);
          this.setState({
            hzlist: hz
            })
        } else if(data[i].city === '北京') {
          bj.push(data[i])
          this.setState({
            bjlist: bj
            })
        } else if(data[i].city === '上海') {
          sh.push(data[i])
          this.setState({
            shlist: sh
            })
        } else if(data[i].city === '广州') {
          gz.push(data[i])
          this.setState({
            gzlist: gz
            })
        } else if(data[i].city === '深圳') {
          sz.push(data[i])
          this.setState({
            szlist: sz
            })
        } else {
          qt.push(data[i])
          this.setState({
            qtlist: qt
            })
        }
      }

      this.setState({
        list: data
        })
    })
    api.requestBannerData().then(data => {
      // console.log(data)
      this.setState({
      banner: data
      })
  })
    }
render () {
  return(
    <div className = "content">
      <NavBar
          mode="dark"
          
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[]}
      >活动</NavBar>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div>
        <Carousel
            autoplay={true}
            swipeSpeed
            infinite={true}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.banner.map(val => (
              <Link to=''
                key={val}
                href="#"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.photo}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </Link>
            ))}
          </Carousel>
      <ul>
          {
            this.state.qtlist.map((item, index) => {
              return(
                <Link to={'/CartDetail/' + item._id} key={item._id}>
                  <li className="myli" key={item._id}>
                    <div className = "photo">
                      <img src = {item.screenshot} alt="11"/>
                    </div>
                    <div className="all">
                      <p>{item.content}</p>
                      <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                      <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                    </div>
                  </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
      <div>
      <ul>
          {
            this.state.bjlist.map((item, index) => {
              return(
                  <Link to={'/CartDetail/' + item._id} key={item._id}>
                    <li key={item._id}>
                    <div className = "photo">
                      <img src = {item.screenshot} alt="11"/>
                    </div>
                    <div className="all">
                        <p>{item.content}</p>
                        <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                        <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                    </div>
                  </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
      <div>
      <ul>
          {
            this.state.shlist.map((item, index) => {
              return(
                  <Link to={'/CartDetail/' + item._id} key={item._id}>
                    <li key={item._id}>
                  <div className = "photo">
                    <img src = {item.screenshot} alt="11"/>
                  </div>
                  <div className="all">
                      <p>{item.content}</p>
                      <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                      <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                  </div>
                </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
      <div>
      <ul>
          {
            this.state.gzlist.map((item, index) => {
              return(
                  <Link to={'/CartDetail/' + item._id} key={item._id}>
                    <li key={item._id}>
                  <div className = "photo">
                    <img src = {item.screenshot} alt="11"/>
                  </div>
                  <div className="all">
                      <p>{item.content}</p>
                      <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                      <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                  </div>
                </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
      <div>
      <ul>
          {
            this.state.szlist.map((item, index) => {
              return(
                  <Link to={'/CartDetail/' + item._id} key={item._id}>
                    <li key={item._id}>
                  <div className = "photo">
                    <img src = {item.screenshot} alt="11"/>
                  </div>
                  <div className="all">
                      <p>{item.content}</p>
                      <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                      <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                  </div>
                </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
      <div>
      <ul>
          {
            this.state.hzlist.map((item, index) => {
              return(
                  <Link to={'/CartDetail/' + item._id} key={item._id}>
                    <li key={item._id}>
                  <div className = "photo">
                    <img src = {item.screenshot} alt="11"/>
                  </div>
                  <div className="all">
                      <p>{item.content}</p>
                      <h5><img className = "data"src="https://b-gold-cdn.xitu.io/v3/static/img/calendar.8e47027.png" alt="日历"/>   {item.createdAt.split('T')[0]}</h5>
                      <h6><img className = "map"src="https://b-gold-cdn.xitu.io/v3/static/img/location.dc6395a.png" alt="定位"/>{item.city}<span>报名参加</span></h6>
                  </div>
                </li>
                </Link>
              )
            })
          }
      </ul>
      </div>
    </Tabs>
    </div>
  )
}
}
export default Com
