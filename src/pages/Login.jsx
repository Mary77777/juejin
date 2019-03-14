import React, { Component } from 'react'
import { InputItem, Toast, Button } from 'antd-mobile';
import api from '@/api/user';
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import '../components/login/login.scss';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
      value: '17737833641',
      hasPasswordError: false,
      passwordvalue: '123456'
    }
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的手机号码');
    }
  }
  onPasswordErrorClick () {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onChange (value) {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
    console.log(this.state.value)
  }
  onPasswordChange (passwordvalue) {
    if (passwordvalue.replace(/\s/g, '').length < 4) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
    console.log(this.state.passwordvalue)
  }

  loginFn (username) {
    // console.log(username, password)
    api.requestData({username})
        .then(data => {
          console.log(data)
          if (data.data === 1) {
            Toast.success('登录成功', 1);
            setTimeout(()=>{
              var storage=window.localStorage;
            storage.isLogin=1;
            storage.user=17737833641;
              this.props.history.push({pathname:'/home'})
            },2000)
          } else if (data === -1) {
            Toast.info('密码错误', 1);
          } else if (data === 2) {
            Toast.fail('没有该用户', 1);
          } else {
            Toast.fail('登录失败', 1);
          }
          
        })
  }
  render () {
  
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
      type = 'primary';
      disabled = false
    }
    return (
        <div className = "center">
            <div>
                <NavBar
                    mode="dark"
                    leftContent="返回"
                    onLeftClick={() => window.history.go(-1)}
                    rightContent={[
                    ]}
                ></NavBar>
            </div>
          <div className="itemimg">
              <img src={require('../images/juejin.png')} alt=""/>
          </div>
            <div className="myinput">
                <InputItem
                    type="phone"
                    clear
                    placeholder="请输入您的手机号"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange.bind(this)}
                    value={this.state.value}
                ></InputItem>
                <InputItem
                    type="password"
                    clear
                    placeholder="请输入您的密码"
                    error={this.state.hasPasswordError}
                    onErrorClick={this.onPasswordErrorClick.bind(this)}
                    onChange={this.onPasswordChange.bind(this)}
                    value={this.state.passwordvalue}
                ></InputItem>
            </div>
          <Button className="btu" type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value, this.state.passwordvalue)}>登录</Button>
          <p>
              <a  className="aleft" href="#/user app/register">忘记密码？</a>
              <a className="aright" href="#/userapp/register">去注册</a>
          </p>
            <p>其他账号登陆
                <ul>
                    <li>
                        <Link to=''><img src={require('../images/weibo.png')} alt=''/></Link>
                    </li>
                    <li className="cen">
                        <Link to=''><img src={require('../images/weixnhao.png')} alt=""/></Link>
                    </li>
                    <li>
                        <Link to=''><img src={require('../images/github.png')} alt=''/></Link>
                    </li>
                </ul></p>

        </div>
    )
  }

}

export default Com
