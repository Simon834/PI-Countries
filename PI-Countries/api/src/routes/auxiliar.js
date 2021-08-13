const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

router.get("/regions", async (req, res, next) => {
  try {
    const allRegions = await Country.aggregate("region", "DISTINCT", {
      plain: false,
    });

    const regionNames = allRegions.map((p) => p.DISTINCT);
    const filtered = regionNames.filter(Boolean);
    res.json(filtered);
  } catch (error) {
    next(error);
  }
});

router.get("/activities", async (req, res, next) => {
  try {
    const allActivities = await Activity.findAll({ attributes: ["name"] });
    const activitiesNames = allActivities.map((p) => p.name);
    res.json(activitiesNames);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
