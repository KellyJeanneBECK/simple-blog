const { addArticle, getAllArticles, getArticle } = require("../models/article");

const browse = async (req, res) => {
  try {
    const articles = await getAllArticles();
    return res.json(articles);
  } catch (error) {
    console.error(error);
  }
};

const read = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await getArticle(id);
    if (article === undefined) {
      return res.status(404).json({ error: "Article not found" });
    }
    return res.send(article);
  } catch (error) {
    console.error(error);
  }
};

const add = async (req, res) => {
  try {
    const { title, intro, content } = req.body;

    const isAdd = await addArticle(title, intro, content);
    if (isAdd) {
      return res.status(200).json({ msg: "article post with success" });
    } else {
      return res.status(500).json({ msg: "CHEH'" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  browse,
  read,
  add,
};
