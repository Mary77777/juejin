import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestlist() {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/topDetail')
        .then(data => {
            console.log(data.data.data);
            resolve(data.data.data);
        }).catch(err => console.log(err))
    })
  }
}
export default api
