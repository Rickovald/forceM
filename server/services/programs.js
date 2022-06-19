const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT * 
    FROM concert_program LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(program) {
  const result = await db.query(
    `INSERT INTO concert_program 
        SET 
        name = "${program.name}",
        difficulty = "${program.difficulty}",
        comments = "${program.comments}",
        place = "${program.place}",
        concert_name = "${program.concert_name}"`
  );
  // let sql = "INSERT INTO concert_program SET ?";
  // let query = db.query(sql, data, (err, results) => {
  //   if (err) throw err;
  //   res.send(JSON.stringify({ status: 200, error: null, response: results }));
  // });
  let message = "Error in updating program";
  if (result.affectedRows) {
    message = "program updating successfully";
    return { message };
  }
}

async function update(id, program) {
  const result = await db.query(
    `UPDATE concert_program 
        SET 
            ${program.name}="${program.data}"
        WHERE id=${id}`
  );

  let message = "Error in updating program";

  if (result.affectedRows) {
    message = "program updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM concert_program WHERE id=${id}`);

  let message = "Error in deleting program";

  if (result.affectedRows) {
    message = "program deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
