import React from "react";
import articles from "@assets/data.json";
import ArticleCard from "@components/ArticleCard";

function Article() {
  return (
    <div>
      <h1 className="text-center text-secondary">My adventure blog</h1>
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

export default Article;
