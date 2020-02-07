import request from '../lib/request'

export const saveCategory = (name) => {
	return request({
		url: '/categories/create',
		method: 'post',
		data: { name },
	})
}

export const getCategories = () => {
	return request({
		url: '/categories',
		method: 'get',
	})
}
