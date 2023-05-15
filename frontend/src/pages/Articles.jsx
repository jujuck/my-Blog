import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import connexion from "@services/connexion";
import ArticleCard from "@components/ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const articlesData = await connexion.get("/articles");
    try {
      if (articlesData) {
        setArticles(articlesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Mes articles d'aventure - Adventure Blog</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repellendus deleniti nam corrupti eius ipsam accusantium pariatur nesciunt eos, perspiciatis saepe eveniet. Ut aperiam, velit sit alias eaque dignissimos quis."
        />
      </Helmet>
      <section className="container">
        <div className="row">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Articles;
