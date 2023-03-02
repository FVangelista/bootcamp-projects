const mongoose = require('mongoose');

//sto creando un oggetto della classe Schema con il quale gestisco i miei dati
var libroSchema = new mongoose.Schema({
    title: {
        type: String,    
    },
     author: {
        type: String,  
    },
    pages: {
        type: Number
    },
    price: {
        type: Number
    }
});


/*La collezione verrà chiamata notaModel ma 
secondo formattazione di Mongoose viene pluralizzata e scritta in 
mnuscolo*/ 
mongoose.model('libroModel', libroSchema);