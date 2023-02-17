const express = require('express');
let router = express.Router();

const mongoose = require('mongoose');

const Libro = mongoose.model('libroModel');

router.get('/', (req, res) => {
  res.render('addupbook', {
    viewTitle: 'Inserisci un libro',
  });
});

router.get('/bookList', (req, res) => {
  Libro.find((err, docs) => {
    if (!err) {
      res.render('listBook', {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.post('/', (req, res) => {
  if (req.body._id == '') insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  //creo un collegamento con lo schema di mongoose
  let libro = new Libro();
  libro.title = req.body.title;
  libro.author = req.body.author;
  libro.pages = req.body.pages;
  libro.price = req.body.price;
  //salvo i dati dall'oggetto nota
  libro.save((err, doc) => {
    if (!err) res.redirect('/libro/booklist');
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Libro.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect('/libro/booklist');
      } else {
        console.log("Errore durante l' update : " + err);
      }
    }
  );
}

//metodo get che imposta il bottone per modificare e in base
//all'id trasferisce i dati al form predestinato
router.get('/:id', (req, res) => {
  Libro.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('addupbook', {
        viewTitle: 'Aggiornamento',
        libro: doc,
      });
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Libro.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/libro/booklist');
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
