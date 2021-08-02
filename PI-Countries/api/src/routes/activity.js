const { Router } = require("express");
const router = Router();
const axios = require("axios").default;

router.post("/", (req, res) => {
  res.json("funciona el post");
});

module.exports = router;
