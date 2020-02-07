import request from '../lib/request'

export const saveExpense = ({ amount, category, description, date, owner }) => {
	return request({
		url: '/expenses/create',
		method: 'post',
		data: { amount, category, description, date, owner },
	})
}

export const getExpenses = () => {
	return request({
		url: '/expenses',
		method: 'get',
	})
}
