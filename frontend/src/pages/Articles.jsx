import React from "react";
import articles from "@assets/data.json";
import ArticleCard from "@components/ArticleCard";

function Articles() {
  return (
    <div>
      <section className="container">
        <div className="row">
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Articles;
