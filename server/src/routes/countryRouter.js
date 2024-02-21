const { Router } = require("express");
const countryRouter = Router();
const {getCountryID, getCountryName, getAllCountries} = require("../handlers/countryHandler")

countryRouter.get("/", getAllCountries);
countryRouter.get("/:id", getCountryID);
countryRouter.get("/name/:name", getCountryName);

module.exports = countryRouter;
