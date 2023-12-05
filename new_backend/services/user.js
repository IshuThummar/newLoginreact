const db = require("../database/index");
class User {
  async SignIn() {
    const que = `INSERT INTO tbl_user ( email,userName, passWord) VALUES ( '${email}', '${userName}', '${passWord}');`;
  }
  async SignOut() {}
}
