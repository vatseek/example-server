//const Merchant = require('privatbank-api')
const moment = require('moment')
const privat = require('config').privat

const DATE_FORMAT = 'DD.MM.YYYY'

// merchant = new Merchant({
// 	id: privat.id,
// 	password: privat.password,
// 	country: 'UA',
// })

const DATA = {
  response: {
    version: '1.0',
    merchant: {
      id: '138922',
      signature: '4644caa4abc09d14b1b382964261f94d9a71eabf',
    },
    data: {
      oper: 'cmt',
      info: {
        statements: {
          status: 'excellent',
          credit: '0.0',
          debet: '82.0',
          statement: [
            {
              card: '5363542306858664',
              appcode: '308375',
              trandate: '2020-01-21',
              trantime: '12:12:00',
              amount: '0.50 UAH',
              cardamount: '-0.50 UAH',
              rest: '502.30 UAH',
              terminal: 'PrivatBank, CP980T00',
              description: 'Перевод на свою «Копилку» 26*66. Сдача от округления расходов до 1 UAH.',
            },
            {
              card: '5363542306858664',
              appcode: '082522',
              trandate: '2020-01-21',
              trantime: '12:09:00',
              amount: '79.87 UAH',
              cardamount: '-81.50 UAH',
              rest: '502.80 UAH',
              terminal: 'RestoranTzOVVANTOSh, L1HM2QJE',
              description: 'Ресторан: РЕСТОРАН &quot;ТРАТОРРИЯ ПАПАРАЦЦИ&quot;, Хмельницький, вул. Проскурвська, 30',
            },
            {
              card: '5363542306858664',
              appcode: '308375',
              trandate: '2020-01-21',
              trantime: '12:12:00',
              amount: '0.63 UAH',
              cardamount: '-0.50 UAH',
              rest: '502.30 UAH',
              terminal: 'PrivatBank, CP980T00',
              description: 'Перевод на свою «Копилку» 26*66. Сдача от округления расходов до 1 UAH.',
            },
          ],
        },
      },
    },
  },
}

const getBalance = (cardNumber = '5363542306858664', startDate, endDate) => {
  // const start = moment(startDate).format(DATE_FORMAT)
  // const end = moment(endDate).format(DATE_FORMAT)
  return Promise.resolve(DATA)

  // return merchant
  //   .statement(cardNumber, start, end)
  //   .then((res) => {
  //     return JSON.parse(res)
  //   })
  //   .catch((e) => {
  //     console.log(e)
  //     return null
  //   })
}

module.exports = {
  getBalance,
}
