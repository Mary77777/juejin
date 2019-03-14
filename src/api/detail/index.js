import axios from 'axios';
import baseUrl from '@/api'
const api = {
    requestData (id) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/juejin/detail/detail?postId=' + id)
          .then(data => {
            // console.log(data)
            resolve(data.data.data[0])
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    requestData1 (id) {
      return new Promise((resolve, reject) => {
        axios.get(baseUrl + '/juejin/deta/detail?postId=' + id)
          .then(data => {
            // console.log(data)
            resolve(data.data.data[0])
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
  
  export default api