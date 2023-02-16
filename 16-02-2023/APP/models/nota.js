const mongoose = require('mongoose');



var notaSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
     surname: {
        type: String,
      
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    text: {
        type: String
    }
});




mongoose.model('notaModel', notaSchema);