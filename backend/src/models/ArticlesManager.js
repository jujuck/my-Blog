const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  findAll() {
    return this.database.query(`
      select a.id, a.title, i.src, i.alt from  ${this.table} as a
      inner join images as i on i.id = a.image_id
    `);
  }

  find(id) {
    return this.database.query(
      `select a.id, a.title, a.subtitle, a.resume, a.text, a.author, i.src, i.alt, JSON_ARRAYAGG(t.label) as tags from ${this.table} as a
      inner join images as i on i.id = a.image_id
      inner join article_to_tags as att on att.article_id = a.id
      inner join tags as t on t.id = att.tags_id
      where a.id = ?`,
      [id]
    );
  }

  insert(article, imageId) {
    return this.database.query(
      `insert into ${this.table} (title, subtitle, text, resume, author, image_id) values (?, ?, ?, ?, "Author from admin", ?)`,
      [article.title, article.subtitle, article.text, article.resume, imageId]
    );
  }

  update(article) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = ArticleManager;
