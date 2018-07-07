const config = require('config');
const express = require('express');
const app = require('./src');

const port = config.port;

app.use(express.static(__dirname + '/frontend'));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port);
console.log(`Server is listening on port ${port}`);
