const db = require("./db")
const helper = require("../helper")
const config = require("../config")

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage)

  const rows = await db.query(
    `SELECT * 
    FROM concerts LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(concert) {
  let data = {
    date: concert.date,
    country: concert.country,
    tickets: concert.tickets,
    city: concert.city,
    place: concert.place,
    group: concert.group,
  };
  let sql = "INSERT INTO concerts SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });

  // const result = await db.query(
  //   `INSERT INTO concerts
  //     ('id', 'img', 'head', 'button', 'href')
  //     VALUES
  //     (NULL, ${img}, ${head}, ${button}, ${href})`
  // );

  // let message = "Error in creating concert";

  // if (result.affectedRows) {
  //   message = "concert created successfully";
  // }

  // return { message };
}

async function update(id, concert) {
  const result = await db.query(
    `UPDATE concerts 
        SET 
            date="${concert.date}", country=${concert.country}, 
            tickets=${concert.tickets}, city=${concert.city}
            place="${concert.place}", group="${concert.group}"
        WHERE id=${id}`
  );

  let message = "Error in updating concert";

  if (result.affectedRows) {
    message = "concert updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM concerts WHERE id=${id}`);

  let message = "Error in deleting concert";

  if (result.affectedRows) {
    message = "concert deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
