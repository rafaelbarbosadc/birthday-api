const { Schema, model } = require('mongoose')

const MessageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = new model("Message", MessageSchema);