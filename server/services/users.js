const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const bcrypt = require("bcrypt");
const tokenService = require("./token");
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
  if (users[0]) {
    return { message: "Такой пользователь уже существует" };
  }

  const passToSave = bcrypt.hashSync(user.password, salt);

  const sql = `INSERT INTO users
  VALUES (NULL, "admin", "${user.name}", "${passToSave}", "");`;

  const query = await db.query(sql);

  const userDto = {
    name: user.name,
    role: "admin",
  };
  const tokens = tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.name, tokens.refreshToken);

  return { ...tokens, user: userDto };
}

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
  const userDto = {
    name: user.name,
    role: "admin",
  };
  const tokens = tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.name, tokens.refreshToken);
  return { ...tokens, user: userDto };
}

async function update(id, user) {
  const passToSave = bcrypt.hashSync(user.password, salt);
  const result = await db.query(
    `UPDATE users 
        SET 
            role="${user.role}", name=${user.name},   
            password=${passToSave}
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

async function logout(refreshToken) {
  const token = await tokenService.removeToken(refreshToken);
  return token;
}
async function refresh(refreshToken) {
  if (!refreshToken) {
    return "Пользователь не авторизован"
  }

  const userData = await tokenService.validateRefreshToken(refreshToken);
  const tokenFromDb = await tokenService.findToken(refreshToken);
  if (!userData || !tokenFromDb) {
    return "Пользователь не авторизован"
  }
  const user = await db.query(
    `SELECT * 
      FROM users WHERE name = "${userData.name}"`
  );
  const userDto = {
    name: user[0].name,
    role: "admin",
  };

  const tokens = await tokenService.generateTokens({ ...userDto });

  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
}
module.exports = {
  getMultiple,
  create,
  update,
  remove,
  login,
  logout,
  refresh,
};
