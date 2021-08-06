const { Router } = require("express");
const router = Router();
const { Activity } = require("../db");

router.post("/", async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const createdActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await createdActivity.addCountries(countries);
    res.json(createdActivity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
