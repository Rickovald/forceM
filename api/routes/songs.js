const express = require("express");
const router = express.Router();
const songs = require("../services/songs");

router.get("/", async function (req, res, next) {
  try {
    res.json(await songs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting songs `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await songs.create(req.body));
  } catch (err) {
    console.error(`Error while creating song`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await songs.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating song`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await songs.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting song`, err.message);
      next(err);
    }
  });

module.exports = router;
