import request from '../lib/request'

export const category = ({ name }) => {
  return request({
    url: '/categories/create',
    method: 'post',
    data: { name },
  })
}

export const getCategory = () => {
  return request({
    url: '/categories/',
    method: 'get',
  })
}
