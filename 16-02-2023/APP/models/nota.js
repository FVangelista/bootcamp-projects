const mongoose = require('mongoose');

// Obj builder - with the new Schema class (provided by mongoose) - which we can manage our data.
// this schema the architecture of all our documents inside of the "nota" collection
var notaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  text: {
    type: String,
  },
});

// The schema model and the its name
mongoose.model('notaModel', notaSchema);
