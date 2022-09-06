const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const userSchema = new Schema({
  // Entity Attributes
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  age: Number
});

// Export
const userObj = mongoose.model('userObj', userSchema);
module.exports = userObj;