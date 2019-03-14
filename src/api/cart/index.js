import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestlist() {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/activity')
      .then(data => {
        // console.log(data.data.data)
        resolve(data.data.data)
      }).catch(err => reject(err))
    })
  },
  requestBannerData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/banner')
        .then(data => {
            //  console.log(data.data.data);
            resolve(data.data.data);
        }).catch(err => console.log(err))
    })
  }
}
export default api