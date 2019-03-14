import axios from 'axios';
const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get('/api/v1/get_entry_by_rank?src=web&category=all')
        .then(data => {
          // console.log(data)
          resolve(data.data.d.entrylist)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default api