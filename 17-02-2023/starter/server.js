require('./models/DBconfig');

const express = require('express');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const routes = require('./controllers/routes');
const routerLibri = require('./controllers/routesLibri');
const routerAPI = require('./controllers/routesApi');
let app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'));
app.use(express.json());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use('/api/v1/cars', routerAPI);
app.use('/libro', routerLibri);
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${PORT}`);
});
