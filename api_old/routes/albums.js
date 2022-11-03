const express = require("express");
const router = express.Router();
const albums = require("../services/albums");

router.get("/", async function (req, res, next) {
  try {
    res.json(await albums.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting albums `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await albums.create(req.body));
  } catch (err) {
    console.error(`Error while creating album`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await albums.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating album`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await albums.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting album`, err.message);
      next(err);
    }
  });

module.exports = router;
