const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

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
  const result = await db.query(
    `INSERT INTO concert_program 
        SET 
        date = "${concert.date}",
        concert_name = "${concert.concert_name}", 
        tickets_price = "${concert.tickets_price}",
        tickets = "${concert.tickets}",
        city = "${concert.city}",
        place = "${concert.place}",
        group = "${concert.group}",
        country = "${concert.country}",
        main_album = "${concert.main_album}"
        `
  );

  let message = "Error in updating program";
  if (result.affectedRows) {
    message = "program updating successfully";
  }

  return { message };

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
          date = "${concert.date}",
          concert_name = "${concert.concert_name}", 
          tickets_price = "${concert.tickets_price}",
          tickets = "${concert.tickets}",
          city = "${concert.city}",
          place = "${concert.place}",
          group = "${concert.group}",
          country = "${concert.country}",
          main_album = "${concert.main_album}"
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
