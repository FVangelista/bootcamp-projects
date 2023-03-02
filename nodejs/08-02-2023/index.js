const express = require('express');
const articles = require('./articles.json');

const app = express();
const PORT = 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// GET
app.get('/api/articles', (req, res) => {
  res.status(200).json({ success: true, data: articles });
  res.send();
});

// POST
app.post('/api/articles', (req, res) => {
  const { id, title, userId, tags } = req.body;
  console.log(req.body);
  if (!id || !title || !userId || !tags) {
    return res.status(400).json({ success: false, msg: 'data not found...' });
  } else {
    return res
      .status(200)
      .json({ success: true, data: { id, title, userId, tags } });
  }
});

app.post('/api/articles/new', (req, res) => {
  const { id, title, tags } = req.body;
  if (!id || !title || !tags) {
    return res.status(400).json({ success: false, msg: 'data not found' });
  } else {
    return res
      .status(201)
      .json({ success: true, data: [...articles, { id, title, tags }] });
  }
});

// POST - login form

app.post('/login', (req, res) => {
  const { firstName, lastName } = req.body;
  if (firstName && lastName) {
    return res.status(201).send(`Welcome ${firstName} ${lastName}`);
  } else {
    return res
      .status(400)
      .send(`The provided data did not match the requirements`);
  }
});

// PUT

app.put('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  const { title, tags, body } = req.body;

  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return res.status(400).json({
      success: false,
      msg: `data not found or id ${id} does not exist`,
    });
  } else {
    const newArticle = articles.map((article) => {
      if (article.id === Number(id)) {
        article.title = title;
        article.body = body;
        article.tags = tags;
      }
      return article;
    });
    res.status(200).json({ success: true, data: newArticle });
  }
});

// DELETE

app.delete('/api/articles/:id', (req, res) => {
  const article = articles.find(
    (article) => article.id === Number(req.params.id)
  );
  if (!article) {
    res
      .status(400)
      .json({ success: false, msg: `id ${req.params.id} not found, ` });
  } else {
    const newArticle = articles.filter(
      (article) => article !== Number(req.params.id)
    );
    // returning the updated list of articles without the deleted article
    return res.status(200).json({ success: true, data: newArticle });
  }
});

app.listen(PORT, () => {
  console.log(`server running at the port ${PORT}`);
});
