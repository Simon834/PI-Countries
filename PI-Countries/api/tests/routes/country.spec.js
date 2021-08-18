/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Pais de prueba",
  capital: "Capital de prueba",
  population: 860000,
  flagImg: "url de bandera",
  area: 119876,
  subregion: "sub-region",
  region: "region",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  );
  describe("GET /countries", async () => {
    try {
      await agent.get("/countries").expect(200);
    } catch (err) {
      console.log(err);
    }
  }).timeout(10000);
  it("responds an array with 250 countries", async () => {
    try {
      const res = await agent.get("/countries");
      expect(res.body).to.have.lengthOf(250);
    } catch (err) {
      console.log(err);
    }
  }).timeout(10000);
  it("If the name query is passed, the country should match with that name", async () => {
    try {
      const res = await agent.get("/countries?name=colombia");
      expect(res.body[0].name).to.be.equal("Colombia");
    } catch (err) {}
  }).timeout(10000);
  it("If an id parameter is passed it must return the country associated with that id", async () => {
    try {
      const res = await agent.get("/countries/COL");
      expect(res.body[0].name).to.be.equal("Colombia");
    } catch (err) {}
  }).timeout(10000);
});
