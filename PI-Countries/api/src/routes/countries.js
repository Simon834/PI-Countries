const { Router } = require("express");
const router = Router();
const axios = require("axios").default;
const { Country, Activity } = require("../db.js");

const ApiURL = "https://restcountries.eu/rest/v2/all";

router.get("/", async (req, res) => {
  let { name } = req.query;

  if (!name) {
    // obtener listado de paises, la primera vez debe cargar todos los paises a la base de datos

    const fullDb = await Country.findAll();

    if (!fullDb.length) {
      try {
        const response = await axios.get(ApiURL);
        const data = response.data;
        const mappedData = [];

        data.map((r) =>
          mappedData.push({
            name: r.name,
            ID: r.alpha3Code,
            flagImg: r.flag,
            region: r.region,
            capital: r.capital,
            subregion: r.subregion,
            area: r.area,
            population: r.population,
          })
        );
        const countryList = await Country.bulkCreate(mappedData);
        const names = countryList.map((p) => p.name);
        res.json(names);
      } catch (error) {
        res.json(error);
      }
    } else {
      const countryList = await Country.findAll();
      const names = countryList.map((p) => p.name);
      res.json(names);
    }
  } else {
    name = name.toLowerCase();
    const countriesList = await Country.findAll();
    const countriesMatch = countriesList.filter((p) =>
      p.name.toLowerCase().includes(name)
    );
    if (countriesMatch.length) {
      res.json(countriesMatch);
    } else {
      res.json("No countries found");
    }
  }
});

router.get("/:idPais", async (req, res) => {
  const idSearch = req.params.idPais.toUpperCase();

  try {
    const countrySearch = await Country.findByPk(idSearch, {
      include: Activity,
    });
    res.json(countrySearch);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
