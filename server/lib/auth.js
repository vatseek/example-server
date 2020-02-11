const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/User')

const localStrategy = new LocalStrategy((username, password, done) => {
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

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
}

const jwtStrategy = new JwtStrategy(opts, function(jwt_payload, done) {
  console.log('---', jwt_payload)

  User.findOne({ login: 'external' }).then((user) => {
    return done(null, user)
  })
})

passport.use(localStrategy)
passport.use(jwtStrategy)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }

  res.send('Unauthorized')
}

module.exports = {
  passport,
  isAuth,
}
