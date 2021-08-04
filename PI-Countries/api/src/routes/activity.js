const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  const createdActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await createdActivity.addCountries(countries);
  res.json(createdActivity);
});

module.exports = router;
