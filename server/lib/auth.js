const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

passport.use(
  new LocalStrategy(function(username, password, done) {

    console.log(username, password)

    User.findOne({ login: username })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
      .catch((e) => {
        return done(e)
      })
  })
)

module.exports = passport
