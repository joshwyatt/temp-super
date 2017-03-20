const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<p>hello</p>');
});

app.get('/:word', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200);
  res.send(`<p>${req.params.word}</p>`);
});

module.exports = app;

app.listen(8000, () => {console.log(8000)});
