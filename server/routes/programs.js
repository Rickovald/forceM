const express = require("express");
const router = express.Router();
const programs = require("../services/programs");

/* GET programs. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await programs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programs `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await programs.create(req.body));
  } catch (err) {
    console.error(`Error while creating program`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await programs.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating program`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await programs.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting program`, err.message);
      next(err);
    }
  });

module.exports = router;
