import React, { Component } from 'react';

import { NavBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import '../components/user/user.scss';
import { Link } from 'react-router-dom';
const Item = List.Item;
const Brief = Item.Brief;

class Com extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
    }

render () {
    let aaa = <div className="login">
        
    <Link to={'/userapp/login/'}>
        <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {

            }}
            platform="android"
        >
            &nbsp;&nbsp;&nbsp;登陆 / 注册<Brief> &nbsp;&nbsp;&nbsp;@添加职位 &nbsp;&nbsp;&nbsp; @添加公司</Brief>
        </Item>
    </Link>
</div>
    let bbb = <div className="de">
    <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {

            }}
            platform="android"
            style={{margin:'.2rem 0'}}
        >
        <img src={require('../images/github.png')} alt=''/>
            &nbsp;&nbsp;&nbsp;Hi,&nbsp;掘金小白<Brief> &nbsp;&nbsp;&nbsp;@前端工程师 &nbsp;&nbsp;&nbsp; @千峰互联</Brief>
        </Item>
    <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
        platform="android"
    >
        <Brief> &nbsp;&nbsp;我赞过的 </Brief>
    </Item>
    <Link to={'/userapp/collect/'}>
    <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
        platform="android"
    >
        <Brief> &nbsp;&nbsp;收藏夹 </Brief>
    </Item>
    </Link>
    <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
        platform="android"
    >
        <Brief> &nbsp;&nbsp;已购小册</Brief>
    </Item>
    <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
        platform="android"
    >
        <Brief> &nbsp;&nbsp;阅读过的文章</Brief>
    </Item>
    <Item
    arrow="horizontal"
    multipleLine
    onClick={() => {}}
    platform="android"
>
    <Brief> &nbsp;&nbsp;标签管理</Brief>
</Item>
    <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {}}
        platform="android"
    >
        <Brief> &nbsp;&nbsp;设置</Brief>
    </Item>

</div>
          
  return(
    <div className = "content">
        <NavBar
            mode="dark"
            
            rightContent={[
            ]}
        >我</NavBar>
           
         {localStorage.getItem('isLogin') === '1'? bbb : aaa}
        
       
    </div>
  )
}
}
export default Com


