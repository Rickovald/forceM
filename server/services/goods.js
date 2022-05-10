const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM goods LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(good) {
  let data = {
    name: good.name,
    description: good.description,
    photo: good.photo,
    price: good.price,
  };
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });

  // const result = await db.query(
  //   `INSERT INTO goods
  //     ('id', 'name', 'description', 'photo', 'price')
  //     VALUES
  //     (NULL, ${name}, ${description}, ${photo}, ${price})`
  // );

  // let message = "Error in creating good";

  // if (result.affectedRows) {
  //   message = "Good created successfully";
  // }

  return { message };
}

async function update(id, good) {
  const result = await db.query(
    `UPDATE goods 
        SET 
            name="${good.name}", description=${good.description}, 
            photo=${good.photo}, price=${good.price}
        WHERE id=${id}`
  );

  let message = "Error in updating good";

  if (result.affectedRows) {
    message = "Good updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM goods WHERE id=${id}`);

  let message = "Error in deleting good";

  if (result.affectedRows) {
    message = "Good deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
