const AbstractManager = require("./AbstractManager");

class ImagesManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(src, alt) {
    return this.database.query(
      `insert into ${this.table} (src, alt) values (?, ?)`,
      [src, alt]
    );
  }

  update(src, alt, id) {
    return this.database.query(`update ${this.table} set ? where id = ?`, [
      { src, alt },
      id,
    ]);
  }
}

module.exports = ImagesManager;
