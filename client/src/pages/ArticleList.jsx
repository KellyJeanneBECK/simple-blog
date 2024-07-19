import axios from "axios";
import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URL;

function ArticleList() {
  const [articles, setArticles] = useState([]);

  /*
  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(`${url}/api/articles`);
        setArticles(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getArticles;
  }, []);
  */

  useEffect(() => {
    const getArticles = async () => {
      try {
        const responses = await axios.get(`${url}/api/articles`);

        setArticles(responses.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getArticles();
  }, []);

  return (
    <section>
      <h2>Tous les articles</h2>
      {articles.map((article) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.intro}</p>
        </article>
      ))}
    </section>
  );
}

export default ArticleList;
