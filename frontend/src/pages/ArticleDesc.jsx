import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import connexion from "@services/connexion";

function ArticleDesc() {
  const [article, setArticle] = useState();
  const { id } = useParams();

  const getArticle = async () => {
    const articleData = await connexion.get(`/articles/${id}`);
    try {
      if (articleData) {
        setArticle(articleData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="container">
      {article && (
        <>
          <Helmet>
            <title>{article.title} - Adventure Blog</title>
            <meta name="description" content={article.resume} />
          </Helmet>
          <div className="row mx-4 my-4">
            <h2 className="text-center text-secondary">{article.title}</h2>
            <h4 className="text-center">{article.subtitle}</h4>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src={article.src}
                alt={article.alt}
                className="w-100 rounded-2 shadow-sm"
              />
              <h6 className="text-center">{article.resume}</h6>
            </div>
            <div className="col-6">
              <p>{article.text}</p>
            </div>
            <div className="row">
              <h5 className="col-6 text-center text-secondary">
                {article.author}
              </h5>
              <p className="col-6 text-center text-secondary">
                {article.tags.map((tag) => (
                  <span key={tag.id}>{tag.label} - </span>
                ))}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleDesc;
