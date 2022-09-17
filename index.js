const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.post("/vini", (req, res) => {
  res.send("Hi this is Vini");
});


module.exports.handler = serverless(app);