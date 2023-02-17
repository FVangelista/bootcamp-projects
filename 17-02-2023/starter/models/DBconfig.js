require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Database connected'));

require('./nota');
require('./libro');
require('./api');
