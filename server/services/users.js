const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT * 
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(user) {
  const users = await db.query(
    `SELECT * 
      FROM users WHERE name = "${user.name}"`
  );
  if (users) {
    return res.json({ message: "Такой пользователь уже существует" });
  }
  const passToSave = bcrypt.hashSync(user.password, salt);
  const data = {
    role: user.role,
    name: user.name,
    password: passToSave,
    hint: user.hint,
  };

  const sql = "INSERT INTO users SET ?";
  const query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
  // const result = await db.query(
  //   `INSERT INTO users
  //     ('id', 'img', 'head', 'button', 'href')
  //     VALUES
  //     (NULL, ${img}, ${head}, ${button}, ${href})`
  // );

  // const message = "Error in creating user";

  // if (result.affectedRows) {
  //   message = "user created successfully";
  // }

  // return { message };
}

const generateAccessToken = (name, role) => {
  const payload = {
    name: name,
    role: role,
  };
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET);
};

async function login(user) {
  const users = await db.query(
    `SELECT * 
      FROM users WHERE name = "${user.name}"`
  );
  if (!users) {
    return res.json({ message: "Такого пользователя не существует" });
  }
  const match = await bcrypt.compare(user.password, users[0].password);

  if (!match) {
    return res.json({ message: "Неправильный пароль" });
  }
  const token = generateAccessToken(user.name, user.role);

  return [users[0], token];
}

async function update(id, user) {
  const passToSave = bcrypt.hashSync(user.password, salt);
  const result = await db.query(
    `UPDATE users 
        SET 
            role="${user.role}", name=${user.name},   
            password=${passToSave}, hint=${user.hint}
        WHERE id=${id}`
  );

  const message = "Error in updating user";

  if (result.affectedRows) {
    message = "user updating successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM users WHERE id=${id}`);

  const message = "Error in deconsting user";

  if (result.affectedRows) {
    message = "user deconsted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  login,
};
