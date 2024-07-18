require("dotenv").config();

const app = require("./app/config");

const PORT = process.env.APP_PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Une erreur est survenu: ", err);
  } else {
    console.info(`Le server tourne sur le port : ${PORT}`);
  }
});
