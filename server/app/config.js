const express = require("express");
const routers = express.Router();
const articleRoutes = require("./routes/article");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Beta Blog server !");
});

app.use("/api", routers);

app.use("/api/articles", articleRoutes);

module.exports = app;
