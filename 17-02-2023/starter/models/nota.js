const mongoose = require('mongoose');

//sto creando un oggetto della classe Schema con il quale gestisco i miei dati
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
    },
    age: {
        type: Number
    }
});


/*La collezione verrà chiamata notaModel ma 
secondo formattazione di Mongoose viene pluralizzata e scritta in 
mnuscolo*/ 
mongoose.model('notaModel', notaSchema);