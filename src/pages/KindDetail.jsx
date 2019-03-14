import React, { Component } from 'react';
// import style from '@/components/user/style';
import api from '@/api/kindDetail/index';
import { Link } from 'react-router-dom';
import { Tabs, Badge } from 'antd-mobile';
import '../components/kind/kindStyle';
import '../components/kind/likeBtn';
import '../components/kind/index.css';
import CommentApp from '@/components/kind/commentApp';

const tabs = [
    { title: <Badge>热门</Badge> },
    { title: <Badge>最新</Badge> },
  ];
class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
          arr: [],
          list: [],
          flag: false,
          textarea: '',
          username: '',
          content: ''
        }
        // this.zanFn = this.zanFn.bind(this);

    }
    zanFn(e) {
      // let text = e.target.innerText
      // console.log(e.target.innerText)
      if(e.target.innerText) {
          e.target.innerText = e.target.innerText*1 +1
      }
      // console.log(this.state.arr);
  }

    change(e) {
      console.log(e.target)
      this.setState(({
          flag: !this.state.flag
      }))
      let text = document.getElementsByClassName("tet")[0];
      console.log(text)
      if(!text.style.display === 'block'){
          text.style.display='block'
      }
      }
      speackFn(e) {
        console.log(e.target.innerText)
    }
componentDidMount () {
    const id = this.props.match.params.id
    var kong1=[]
    var kong2=[]
    api.requestlist().then(data => {
        for(var i in data) {
            if(data[i].flag === id*1+1) {
                // console.log(data[i].list)
                for(var j in data[i].list) {
                    if(data[i].list[j].likedCount > 13) {
                        kong1.push(data[i].list[j])
                    } else {
                        kong2.push(data[i].list[j])
                    }
                }
            }
            // console.log(kong1,kong2)
        }
      this.setState({
        list: kong1,
          arr: kong2
      })
    })
  }
render () {
  let html =  <div className="txt">{<CommentApp />}</div>
  return(
    <div className = "content">
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
          <div>
          <ul>
              { this.state.arr.map((item, index) => {
                // console.log(this.state.list)
                return(
                  <Link to={'/KindDetail/' + item.objectId} key={item.objectId}>
                    <li className="list" key={ item.objectId }>
                      <div className='hea'>
                        <div className="left">
                          <img className="tx" src={item.user.avatarLarge} alt="头像"/>
                          <div className="name">
                            <b>{item.user.username}</b>
                          <div className='ti'>
                            <span>{item.user.jobTitle}</span>
                            <i>@{item.user.company}</i>
                          </div>
                          </div>
                          <div className="right">关注</div>
                        </div>
                      </div>
                      <div className="cont">
                        <p>{item.content}</p>
                        <img className="con" src={item.pictures[0]} alt="内容"/>
                      </div>
                      <div className = "foo">
                          <span className="praise" onClick={this.zanFn}>
                              <img className="zan" src={require('../images/zan.png')} alt=''/>
                              {item.likedCount}
                          </span>
                          <span className="speak"  onClick={this.change.bind(this)}>
                              <img className="xx" src={require('../images/xx.png')} alt=''/>
                              { item.commentCount }
                          </span>
                      </div>
                        <div className="tet" style={{display: 'flag'}}>
                            {this.state.flag === true ? html : ''}
                        </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
            <div>
                <ul>
                    { this.state.list.map((item, index) => {
                        // console.log(this.state.list)
                        return(
                            <Link to={'/KindDetail/' + item.objectId} key={item.objectId}>
                                <li className="list" key={ item.objectId }>
                                    <div className='hea'>
                                        <div className="left">
                                            <img className="tx" src={item.user.avatarLarge} alt="头像"/>
                                            <div className="name">
                                                <b>{item.user.username}</b>
                                                <div className='ti'>
                                                    <span>{item.user.jobTitle}</span>
                                                    <i>@{item.user.company}</i>
                                                </div>
                                            </div>
                                            <div className="right">关注</div>
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <p>{item.content}</p>
                                        <img className="con" src={item.pictures[0]} alt="内容"/>
                                    </div>
                                    <div className = "foo">
                                    <span className="praise" onClick={this.zanFn.bind(this)}>
                                        < img className="zan" src={require('../images/zan.png')} alt=''/>
                                        {item.likedCount}
                                    </span>
                          <span className="speak"  onClick={this.change.bind(this)}>
                              <img className="xx" src={require('../images/xx.png')} alt=''/>
                              { item.commentCount }
                          </span>
                      </div>
                        <div className="tet" style={{display: 'flag'}}>
                            {this.state.flag === true ? html : ''}
                        </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </Tabs>
    </div>
  )
}
}
export default Com


