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

  delete(id) {
    return this.database.query(
      `delete from ${this.table} where article_id = ?`,
      [id]
    );
  }
}

module.exports = ArticleToTagsManager;
