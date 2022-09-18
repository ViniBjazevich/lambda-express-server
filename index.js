const serverless = require('serverless-http');
const express = require('express');
const app = express();
const router = express.Router();
const { createConnection, endConnection } = require("./database/index");
const artistsRouter = require('./routes/artists')

app.use('/artists', artistsRouter)

app.get('/', (req, res) => {
  res.send('Hello world!')
});

module.exports.handler = serverless(app);