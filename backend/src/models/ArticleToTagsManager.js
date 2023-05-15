const AbstractManager = require("./AbstractManager");

class ArticleToTagsManager extends AbstractManager {
  constructor() {
    super({ table: "article_to_tags" });
  }

  insert(articleId, tags) {
    return this.database.query(
      `insert into ${this.table} (article_id, tags_id) values ?`,
      [tags.map((tag) => [articleId, tag])]
    );
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ArticleToTagsManager;
