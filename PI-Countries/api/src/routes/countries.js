const { Router } = require("express");
const router = Router();
const axios = require("axios").default;

router.get("/", (req, res) => {
  let { name } = req.query;
  if (name) {
    console.log("hay query");
    res.json("hola mundo con query");
  } else {
    // obtener listado de paises, la primera vez debe cargar todos los paises a la base de datos
  }
});

router.get("/{idPais}", (req, res) => {
  res.send("hola con ID");
});

module.exports = router;
