const express = require("express");
const router = express.Router();
const concerts = require("../services/concerts");

/* GET concerts. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await concerts.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting concerts `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await concerts.create(req.body));
  } catch (err) {
    console.error(`Error while creating concert`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await concerts.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating concert`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await concerts.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting concert`, err.message);
      next(err);
    }
  });

module.exports = router;
