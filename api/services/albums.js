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

async function create(album) {
  let data = {
    name: album.name,
    year: album.year,
    href: album.href,
    image: album.image,
  };
  let sql = "INSERT INTO discography SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });

  // const result = await db.query(
  //   `INSERT INTO albums
  //     ('id', 'img', 'head', 'button', 'href')
  //     VALUES
  //     (NULL, ${img}, ${head}, ${button}, ${href})`
  // );

  // let message = "Error in creating album";

  // if (result.affectedRows) {
  //   message = "album created successfully";
  // }

  // return { message };
}

async function update(id, album) {
  const result = await db.query(
    `UPDATE discography 
        SET 
            name="${album.name}", year=${album.year}, 
            href=${album.href}, image=${album.image}
        WHERE id=${id}`
  );

  let message = "Error in updating album";

  if (result.affectedRows) {
    message = "album updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM discography WHERE id=${id}`);

  let message = "Error in deleting album";

  if (result.affectedRows) {
    message = "album deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
