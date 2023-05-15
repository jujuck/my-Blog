import React from "react";
import articles from "@assets/data.json";
import { useParams } from "react-router-dom";

function ArticleDesc() {
  const { id } = useParams();
  const article = articles.find((art) => art.id === +id);

  return (
    <div className="container">
      <div className="row mx-4 my-4">
        <h2 className="text-center text-secondary">{article.title}</h2>
        <h4 className="text-center">{article.subtitle}</h4>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src={article.image.src}
            alt={article.image.alt}
            className="w-100 rounded-2 shadow-sm"
          />
          <h6 className="text-center">{article.resume}</h6>
        </div>
        <div className="col-6">
          <p>{article.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleDesc;
