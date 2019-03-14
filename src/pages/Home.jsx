import React, { Component } from 'react'
import List from '@/components/home/List'
// import api from '@/api/home'

class Com extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // componentDidMount () {
  //   api.requestData().then(data => {
  //     this.setState({
  //       list: data
  //     })
  //   })
    
  // }

  render () {
    return (
      <div className = "content">
        <List list = { this.state.list }/>
      </div>
    )
  }

}
    export default Com;