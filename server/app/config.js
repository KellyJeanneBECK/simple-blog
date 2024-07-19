const express = require("express");
const cors = require("cors");
const articleRoutes = require("./routes/article");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Beta Blog server !");
});

app.use("/api/articles", articleRoutes);

module.exports = app;
