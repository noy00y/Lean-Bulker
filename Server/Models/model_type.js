const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const typeSchema = new Schema({
  attribute: {
    type: String,
    required: true,
  },
});

// Export
const type = mongoose.model('', typeSchema);
module.exports = type;