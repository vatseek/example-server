import axios from 'axios'
const config = require('../config.json')

export const request = ({ url, method = 'get', data = {} }) => {
  let headers = {}

  return axios({
    url: `${config.apiUrl}${url}`,
    method,
    data,
    headers,
  })
    .then(({ data }) => data)
    .catch((e) => {
      console.log(e)
      return Promise.reject(e)
    })
}

export const category = ({ name }) => {
    return request({
      url: '/categories/create',
      method: 'post',
      data: { name },
    })
  }