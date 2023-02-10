const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

router.get('/contatti', (req, res) => {
  res.render('contatti', {
    title: 'Contatti',
  });
});

router.get('/formazione', (req, res) => {
  res.render('formazione', {
    title: 'Formazione',
  });
});

router.get('/web-design', (req, res) => {
  res.render('web-design', {
    title: 'Web-Design',
  });
});

router.get('*', (req, res) => {
  res.send('404 | page not found');
});

module.exports = router;
