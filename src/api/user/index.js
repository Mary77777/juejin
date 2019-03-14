import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestData (tel) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/api/users/telSearch?tel='+ tel)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestregisterData (name,password) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/api/users/register?tel='+name+'&password='+password)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default api