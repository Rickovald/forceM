const express = require("express");
const router = express.Router();
const goods = require("../services/goods");

/* GET goods. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await goods.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting goods `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await goods.create(req.body));
  } catch (err) {
    console.error(`Error while creating good`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await good.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating good`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await goods.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting good`, err.message);
      next(err);
    }
  });

module.exports = router;
