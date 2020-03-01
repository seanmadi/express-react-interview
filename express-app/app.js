const fetch = require('node-fetch');
var express = require('express');
var app = express();
const port = 3000;

app.get('/products', async function (req, res) {
  res.end("Hello world!");
})

app.listen(port, () => console.log(`Listening on port ${port}`));
