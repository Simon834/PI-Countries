const { Router } = require("express");
const router = Router();
const axios = require("axios").default;
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const ApiURL = "https://restcountries.eu/rest/v2/all";

//Ruta para obtener un listado de paises, si se pasa un nombre por query, devolver el resultado de la busqueda
router.get("/", async (req, res, next) => {
  let { name } = req.query;

  try {
    if (!name) {
      // obtener listado de paises, la primera vez debe cargar todos los paises a la base de datos

      const fullDb = await Country.findAll();

      if (!fullDb.length) {
        const response = await axios.get(ApiURL);
        const data = response.data;
        const mappedData = data.map((r) => {
          return {
            name: r.name,
            ID: r.alpha3Code,
            flagImg: r.flag,
            region: r.region,
            capital: r.capital,
            subregion: r.subregion,
            area: r.area,
            population: r.population,
            currency: r.currency,
          };
        });
        const countryList = await Country.bulkCreate(mappedData);
        const names = countryList.map((p) => {
          return {
            name: p.name,
            flagImg: p.flagImg,
            ID: p.ID,
            region: p.region,
          };
        });
        res.json(names);
      } else {
        const countryList = await Country.findAll();
        const names = countryList.map((p) => {
          return {
            name: p.name,
            flagImg: p.flagImg,
            ID: p.ID,
            region: p.region,
          };
        });
        return res.json(names);
      }

      // Si no tiene query
    } else {
      // name = name.toLowerCase();
      // const countriesList = await Country.findAll();
      // const countriesMatch = countriesList.filter((p) =>
      //   p.name.toLowerCase().includes(name)
      // );

      const findDatabase = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });

      if (findDatabase) {
        return res.json(findDatabase);
      } else {
        return res.json("No countries found");
      }
    }
  } catch (error) {
    next(error);
  }
});

//Ruta busqueda de pais por ID (params)

router.get("/:idPais", async (req, res, next) => {
  const idSearch = req.params.idPais.toUpperCase();

  try {
    const countrySearch = await Country.findByPk(idSearch, {
      include: Activity,
    });
    res.json(countrySearch);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
