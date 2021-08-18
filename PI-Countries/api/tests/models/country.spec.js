const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.create({
          name: "Pais de prueba",
          capital: "Capital de prueba",
          population: 860000,
          flagImg: "url de bandera",
          area: 119876,
          subregion: "sub-region",
          region: "region",
        });
      });

      it("should receive an object for country", () => {
        let country = {
          name: "Pais de prueba",
          capital: "Capital de prueba",
          population: 860000,
          flagImg: "url de bandera",
          area: 119876,
          subregion: "sub-region",
          region: "region",
        };
        expect(country).to.be.a("object");
      });
      it("should receive a number in both population and area", () => {
        let country = {
          name: "Pais de pruba",
          capital: "Capital de prueba",
          population: 860000,
          flagImg: "url de bandera",
          area: 119876,
          subregion: "sub-region",
          region: "region",
        };
        expect(country).to.be.a("object");
        expect(typeof country.population === "number").to.equal(true);
        expect(typeof country.area === "number").to.equal(true);
      });
    });
  });
});
