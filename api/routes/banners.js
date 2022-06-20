const express = require("express");
const router = express.Router();
const banners = require("../services/banners");

/* GET banners. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await banners.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting banners `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await banners.create(req.body));
  } catch (err) {
    console.error(`Error while creating banner`, err.message);
    next(err);
  }
});
router.post("/upload", async function (req, res, next) {
  try {
    res.json(await banners.upload(req.body));
  } catch (err) {
    console.error(`Error while creating banner`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await banners.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating banner`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await banners.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting banner`, err.message);
      next(err);
    }
  });

module.exports = router;
