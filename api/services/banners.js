const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM banners LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(banner) {
  const result = await db.query(
    `INSERT INTO banners 
        SET 
        img = "${banner.img}",
        head = "${banner.head}",
        button = "${banner.button}",
        href = "${banner.href}"`
  );

  let message = "Error in updating program";
  if (result.affectedRows) {
    message = "program updating successfully";
  }

  return { message };
}

async function update(id, banner) {
  // const result = await db.query(
  //   `UPDATE banners
  //       SET
  //           img="${banner.img}", head=${banner.head},
  //           button=${banner.button}, href=${banner.href}
  //       WHERE id=${id}`
  // );

  // let message = "Error in updating banner";

  // if (result.affectedRows) {
  //   message = "banner updating successfully";
  // }

  // return { message };
}
async function upload(img) {
}
async function remove(id) {
  const result = await db.query(`DELETE FROM banners WHERE id=${id}`);

  let message = "Error in deleting banner";

  if (result.affectedRows) {
    message = "banner deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  upload,
};
