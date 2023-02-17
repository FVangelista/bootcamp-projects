const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

var carsSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  powerSupply: {
    type: String,
    require: true,
  },
  postDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model('carsModel', carsSchema);
