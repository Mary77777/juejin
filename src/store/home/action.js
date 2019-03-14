import api from '@/api/home';
const requestData = () => (dispatch) => {
  api.requestData().then(data => {
    dispatch({type: 'CHANGE_LIST_DATA', data})
  })
}

export default { requestData };