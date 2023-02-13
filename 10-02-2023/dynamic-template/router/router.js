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

router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Signup',
  });
});

router.post('/signup', (req, res) => {
  // console.log(`${req.body.username} / ${req.body.password}`);

  if (!req.body.username || !req.body.password) {
    res.status(400);
    res.render('signup', { message: 'Insert username and password' });
  } else {
    let name = 'filippo';
    let password = 12345;
    let userAuth = { name: name, password: password };
    if (name == req.body.username && password == req.body.password) {
      req.session.user = userAuth;
      res.redirect('/private');
    } else {
      res.redirect('/warning');
    }
  }

  // res.render('signup');
});

// protection control - private page

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/signup');
  }
}

router.get('/private', checkPage, (req, res) => {
  res.render('private');
});

router.get('/warning', (req, res) => {
  res.render('warning');
});

router.get('/logout', (req, res) => {
  console.log('logout executed..');
  req.session = null;
  res.redirect('/signup');
});

router.get('*', (req, res) => {
  res.send('404 | page not found');
});

module.exports = router;
