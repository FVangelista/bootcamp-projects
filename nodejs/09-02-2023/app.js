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
  res.render('home', {
    name: 'filippo',
    title: 'HBS Tutorial - Home',
    subTitle: 'My Preferences:',
    myPreferences: { pet: 'dog', color: 'yellow', season: 'summer' },
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'HBS Tutorial - About ',
  });
});

app.get('/form', (req, res) => {
  res.render('form', {
    title: 'HBS - Form',
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

app.post('/people', (req, res) => {
  const { name, age, city } = req.body;
  console.log(req.body);
  if (name && age) {
    return res.status(201).render('people', {
      title: 'HBS - Post form',
      sub: 'POST - Data',
      person: { name, age, city },
      table_1: 'name',
      table_2: 'age',
      table_3: 'city',
    });
  } else {
    return res.status(400).send(`There was an error trying to reach the data`);
  }
});

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
