const jwt = require("jsonwebtoken");
// const tokenModel = require('../models/token-model');
const db = require("./db");

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET);
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userName, refreshToken) {
    const token = await db.query(
      `UPDATE admins SET 
        refreshToken = "${refreshToken}"
        WHERE name="${userName}"`
    );
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await db.query(
      `UPDATE admins SET
        refreshToken = ""
        where refreshToken = "${refreshToken}"`
    );

    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await db.query(
      `SELECT refreshToken FROM admins
         where refreshToken = "${refreshToken}"`
    );

    return tokenData;
  }
}

module.exports = new TokenService();
