const Merchant = require('privatbank-api')
const moment = require('moment')
const config = require('config').privat

const DATE_FORMAT = 'DD.MM.YYYY'

merchant = new Merchant({
	id: privat.id,
	password: privat.password,
	country: 'UA',
})

const getBalance = (cardNumber = '', startDate, endDate) => {
	const start = moment(startDate).format(DATE_FORMAT)
	const end = moment(endDate).format(DATE_FORMAT)

	merchant.statement(cardNumber, start, end)
}

module.exports = getBalance
