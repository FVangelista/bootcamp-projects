const express = require('express');
const app = express();
const users = require('./data');

const PORT = 5500;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET
app.get('/api/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
  res.send();
});

// POST
app.post('/api/users', (req, res) => {
  const { id, name, city, age } = req.body;
  console.log(req.body);
  if (!id || !name || !city || !age) {
    return res.status(400).json({ success: false, msg: 'data not found...' });
  } else {
    return res
      .status(200)
      .json({ success: true, user: { id, name, city, age } });
  }
});

app.listen(PORT, () => {
  console.log(`server running at the port ${PORT}`);
});
