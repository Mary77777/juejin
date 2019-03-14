import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/total')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestQianduanData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/qianduan')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestHouduanData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/houduan')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestMobileData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/mobile')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestChainData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/chain')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestCommonData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/juejin/common')
        .then(data => {
          // console.log(data.data.data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
