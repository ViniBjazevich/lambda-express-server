const serverless = require("serverless-http");
const express = require("express");
const app = express();
const artistsRouter = require("./routes/artists");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// creating routes
app.get("/api", (req, res) => {
  res.send("Hello world!");
});

app.post("/api", (req, res) => {
  const { name } = req.body;

  res.json(`Hello there ${name}!`);
});

// using routers
app.use("/artists", artistsRouter);

// to run and test locally
if (process.env.DEVELOPMENT) {
  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
}

module.exports.handler = serverless(app);
