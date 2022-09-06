const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const foodSchema = new Schema({
  // Entity Attributes
  foodName: String,
  quantity: Number,
  category: String,
  calories: Number,
  timeConsumed: {
    type: Date,
    default: new Date(),
  },
  micro: {
    
  },
  macro: {

  },
  fats: {

  }
});

// Export
const foodObj = mongoose.model('foodObj', foodSchema);
module.exports = foodObj;