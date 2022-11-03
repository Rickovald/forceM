const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT * 
    FROM songs LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(song) {
  const result = await db.query(
    `INSERT INTO songs 
        SET 
        id_in_album = "${song.id_in_album}",
        name = "${song.name}",
        album_id = "${song.album_id}"`
  );
  let message = "Error in updating program";
  if (result.affectedRows) {
    message = "program updating successfully";
  }

  return { message };
}

async function update(id, song) {
  const result = await db.query(
    `UPDATE songs 
        SET 
             ${song.db_name}='${song.name}'
        WHERE id=${id}`
  );

  let message = "Error in updating song";

  if (result.affectedRows) {
    message = "song updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM songs WHERE id=${id}`);

  let message = "Error in deleting song";

  if (result.affectedRows) {
    message = "song deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
