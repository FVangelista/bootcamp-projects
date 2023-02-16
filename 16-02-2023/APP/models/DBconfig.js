const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://bortoletti_pubblic:010203@cluster0.g4nlbek.mongodb.net/note?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log('MongoDB connesso.');
    } else {
      console.log(`Problemi con la connessione:  ${err}`);
    }
  }
);

require('./nota');
require('./books');
