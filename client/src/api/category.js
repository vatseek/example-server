import request from '../lib/request'

export const saveCategory = (name) => {
  return request({
    url: '/categories/create',
    method: 'post',
    data: { name },
  })
}

export const fetchCategories = () => {
  return request({
    url: '/categories',
    method: 'get',
  })
}

export const deleteCategory = (_id) => {
  return request({
    url: `/categories/delete/${_id}`,
    method: 'get',
  })
}
