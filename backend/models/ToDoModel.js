const mongoose = require('mongoose') // Correct import

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true // 'require' should be 'required'
  }
})

module.exports = mongoose.model('ToDo', todoSchema) // Correct method
