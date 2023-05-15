import React from "react";
import PropTypes from "prop-types";
import articleType from "../types/ArticleType";

function ArticleCard({ article }) {
  return (
    <article className="col-md-4 col-sm-12">
      <div className="border m-2">
        <h2 className="text-center">{article.title}</h2>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.instanceOf(articleType).isRequired,
};

export default ArticleCard;
