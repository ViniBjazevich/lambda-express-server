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

app.get("/bolt", (req, res) => {
  res.send("This is Bolt!!!");
});

app.post("/signup", (req, res) => {
  const { name } = req.body;

  res.json(`Hello there ${name}`);
});

if (process.env.DEVELOPMENT) {
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}

module.exports.handler = serverless(app);
