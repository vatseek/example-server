const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
})

UserSchema.methods.validPassword = () => {
  return true
}

module.exports = mongoose.model('User', UserSchema)
