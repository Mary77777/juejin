import React, { Component } from 'react'
import List from '@/components/home/List'
import api from '@/api/home'
import { NavBar} from 'antd-mobile';
class Com extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data)
      this.setState({
        list: data
      })
    })
    
  }

  render () {
    
    return (
      <div className = "content">
        <NavBar
            mode="dark"
            leftContent="返回"
            rightContent={[]}
        >首页</NavBar>
        
          
        <List list = { this.props.list }/>
      </div>
    )
  }

}

export default Com
