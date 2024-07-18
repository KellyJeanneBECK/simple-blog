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
    const title = req.body.title;
    const intro = req.body.intro;
    const content = req.body.content;

    const isAdd = await addArticle(title, intro, content);
    if (isAdd) {
      return res.status(200);
    } else {
      return res.status(500);
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
