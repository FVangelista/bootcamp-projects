const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('bookModel');

router.get('/', (req, res) => {
  res.render('library', {
    viewTitle: 'Library',
  });
});

// recall with post method the create or update function
router.post('/', (req, res) => {
  if (req.body._id == '') insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  // Create a bond with the mongoose schema
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.country = req.body.country;
  book.genre = req.body.genre;
  book.publication = req.body.publication;
  book.price = req.body.price;
  //   Save the data from the obj
  book.save((err, doc) => {
    if (!err) res.redirect('/library/booksList');
    else console.log(`Insert error : ${err}`);
  });
}

function updateRecord(req, res) {
  Book.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect('/library/booksList');
    } else {
      console.log('Error on update : ' + err);
    }
  });
}

router.get('/booksList', (req, res) => {
  Book.find((err, docs) => {
    if (!err) {
      res.render('booksList', {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

// Method GET that sets up (through mongoose - findByid) the btn to modify
// based trough the form
router.get('/:id', (req, res) => {
  Book.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('library', {
        viewTitle: 'Update',
        book: doc,
      });
    }
  });
});

router.get('/delete/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/library/booksList');
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
