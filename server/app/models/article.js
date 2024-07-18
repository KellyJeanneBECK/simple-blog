const db = require("../database/db");

const addArticle = async (title, intro, content) => {
  try {
    const [isInsert] = await db.query(
      "INSERT INTO article (title, intro, content) VALUES (?, ?, ?)",
      [title, intro, content]
    );
    if (isInsert.affectedRows === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

const getAllArticles = async () => {
  try {
    const [articles] = await db.query("SELECT * FROM article");
    return articles;
  } catch (error) {
    console.error(error);
  }
};
const getArticle = async (id) => {
  try {
    const [article] = await db.query("SELECT * FROM article WHERE id = ?", [
      id,
    ]);

    return article[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addArticle,
  getAllArticles,
  getArticle,
};
