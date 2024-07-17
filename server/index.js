const express = require("express");

const app = express();

const PORT = 3310;

app.get("/", (req, res) => {
  res.send("Welcome to my blog's server");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
