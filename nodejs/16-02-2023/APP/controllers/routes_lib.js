const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('bookModel');

router.get('/', (req, res) => {
  res.render('libraryAddup', {
    viewTitle: 'Inserisci un libro',
  });
});

router.post('/', (req, res) => {
  if (req.body._id == '') {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.genre = req.body.genre;
  book.save((err, doc) => {
    if (!err) res.redirect('/lib/libraryList');
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Book.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect('/lib/libraryList');
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get('/libraryList', (req, res) => {
  Book.find((err, docs) => {
    if (!err) {
      res.render('libraryList', {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get('/:id', (req, res) => {
  Book.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('libraryAddup', {
        viewTitle: 'Aggiornamento',
        book: doc,
      });
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/lib/libraryList');
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
