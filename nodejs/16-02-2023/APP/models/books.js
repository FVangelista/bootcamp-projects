const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

mongoose.model('bookModel', bookSchema);
