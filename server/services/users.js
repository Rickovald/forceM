const db = require("./db")
const helper = require("../helper")
const config = require("../config")

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage)

  const rows = await db.query(
    `SELECT * 
    FROM discography LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(user) {
  let data = {
    role: user.role,
    name: user.name,
    password: user.password,
    hint: user.hint,
  };
  let sql = "INSERT INTO discography SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });

  // const result = await db.query(
  //   `INSERT INTO users
  //     ('id', 'img', 'head', 'button', 'href')
  //     VALUES
  //     (NULL, ${img}, ${head}, ${button}, ${href})`
  // );

  // let message = "Error in creating user";

  // if (result.affectedRows) {
  //   message = "user created successfully";
  // }

  // return { message };
}

async function update(id, user) {
  const result = await db.query(
    `UPDATE discography 
        SET 
            role="${user.role}", name=${user.name}, 
            password=${user.password}, hint=${user.hint}
        WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.affectedRows) {
    message = "user updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM discography WHERE id=${id}`);

  let message = "Error in deleting user";

  if (result.affectedRows) {
    message = "user deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
