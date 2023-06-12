const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(email, hash) {
    return this.database.query(
      `insert into ${this.table} (email, encrypt_pwd) values (?, ?)`,
      [email, hash]
    );
  }
}

module.exports = UserManager;
