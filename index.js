const serverless = require("serverless-http");
const express = require("express");
const app = express();

const artistsRouter = require("./routes/artists");

app.use(express.json());

app.use("/artists", artistsRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/vini", (req, res) => {
  res.send("This is Vini!!!");
});

app.post("/signup", (req, res) => {
  const { name } = req.body;

  res.json(`Hello there ${name}`);
});

module.exports.handler = serverless(app);
