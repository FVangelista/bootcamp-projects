require('./models/DBconfig');
const express = require('express');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const routes = require('./controllers/routes');
const r_lib = require('./controllers/routes_lib');
let app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use('/home', routes);
app.use('/lib', r_lib);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${3000}`);
});
