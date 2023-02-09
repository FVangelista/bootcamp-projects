const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = 4000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  // res will work with rende(), when we work with hsb
  res.render('home', {
    name: 'filippo',
    title: 'HBS Tutorial - Home',
    subTitle: 'My Preferences:',
    myPreferences: { pet: 'dog', color: 'yellow', season: 'summer' },
  });
});

app.get('/about', (req, res) => {
  // res will work with rende(), when we work with hsb
  res.render('about', {
    title: 'HBS Tutorial - About ',
  });
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`Welcome ${name} - you are logged in`);
  } else {
    return res.status(400).send(`There was an error trying to reach the data`);
  }
});

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
