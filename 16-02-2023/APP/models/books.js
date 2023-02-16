const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  country: {
    type: String,
  },
  genre: {
    type: String,
  },
  publication: {
    type: String,
  },
  price: {
    type: Number,
  },
});

mongoose.model('bookModel', bookSchema);
