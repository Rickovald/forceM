const express = require("express");
const router = express.Router();
const users = require("../services/users");

router.get("/", async function (req, res, next) {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const userData = await users.login(req.body);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (err) {
    console.error(`Error while loggining`, err.message);
    next(err);
  }
});

router.post("/registration", async function (req, res, next) {
  try {
    const userData = await users.create(req.body);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await users.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await users.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

router.get("/refresh", async function (req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const userData = await users.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 100000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (err) {
    console.error(`Error while refreshing user`, err.message);
    next(err);
  }
});

router.post("/logout", async function (req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const token = await users.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;
