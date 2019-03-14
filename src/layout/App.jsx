import React, { Component } from 'react';

import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Small from '@/pages/Small';
import Home from '@/pages/Home';
import Kind from '@/pages/Kind';
import Cart from '@/pages/Cart';
import User from '@/pages/User';
import KindDetail from '@/pages/KindDetail';
import CartDetail from '@/pages/CartDetail';

import '../components/app.scss';


class App extends Component {
  state = {
    visible: false,
    selected: '',
    list: []
  };
  
  render () {
    return (
      <div className = "box">
        
        {/* <img src={require('../images/logo.png')} alt='' />> */}
        <Switch>
          <Route path="/home" component = { Home } />
          <Route path="/kind" component = { Kind } />
          <Route path="/cart" component = { Cart } />
          <Route path="/user" component = { User } />
          <Route path="/small" component = { Small } />
          
          <Route path="/kindDetail/:id" component = { KindDetail } />
          <Route path="/cartDetail/:id" component = { CartDetail } />
          <Redirect path= "/" to="/home"/>
        </Switch>
        <footer className = "footer">
          <ul>
            <NavLink to = "/home" className="iconfont icon-home" style={{fontSize:'.21rem'}}><span style={{fontSize:'.12rem'}}>主页</span></NavLink >
            <NavLink to = "/kind" className="iconfont icon-liuyan1" style={{fontSize:'.21rem'}}><span style={{fontSize:'.12rem'}}>话题</span></NavLink >
            <NavLink to = "/small" className="iconfont icon-thin-_book_readi" style={{fontSize:'.21rem'}}><span style={{fontSize:'.12rem'}}>小册</span></NavLink >
            <NavLink to = "/cart" className="iconfont icon-huodong" style={{fontSize:'.21rem'}}><span style={{fontSize:'.12rem'}}>活动</span></NavLink >
            <NavLink to = "/user" className="iconfont icon-wode-F" style={{fontSize:'.21rem'}}><span style={{fontSize:'.12rem'}}>我的</span></NavLink >
          </ul>
        </footer>
      </div>
    )
  }
}

export default App
