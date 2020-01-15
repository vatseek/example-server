const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const { config, engine } = require('express-edge')
const appPort = require('config').get('appPort')

const db = require('./server/lib/db')
const auth = require('./server/lib/auth')
const commonRoutes = require('./server/routes/common')
const userRoutes = require('./server/routes/user')

config({ cache: false })

app.use(engine)
app.set('views', `${__dirname}/server/views`)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(auth.initialize())
app.use(auth.session())

app.use('/', commonRoutes)
app.use('/user', userRoutes)

app.listen(appPort, () => {
  console.info(`Server started: http://localhost:${appPort}`)
})

process.on('unhandledRejection', (error) => {
  console.log(error)
  // log(error)
})
