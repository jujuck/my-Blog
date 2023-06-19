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

  findOne(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
