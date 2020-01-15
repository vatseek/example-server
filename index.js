const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const { config, engine } = require('express-edge')
const appPort = require('config').get('appPort')

const userRoutes = require('./server/routes/user')
const db = require('./server/lib/db')

config({ cache: false })

app.use(engine)
app.set('views', `${__dirname}/server/views`)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { username: 'tt', env: process.env.NODE_ENV, names: [] })
})

app.use('/user', userRoutes)

app.listen(appPort, () => {
  console.info(`Server started: http://localhost:${appPort}`)
})

process.on('unhandledRejection', (error) => {
  console.log(error)
  // log(error)
})
