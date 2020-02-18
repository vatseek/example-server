import request from '../lib/request'

export const login = ({ username, password }) => {
  return request({
    url: '/login',
    method: 'post',
    data: { username, password },
  })
}

export const register = ({ username, password }) => {
  return request({
    url: '/register',
    method: 'post',
    data: { username, password },
  })
}

export const getProtected = () => {
  return request({ url: '/api/profile', method: 'get' })
}
