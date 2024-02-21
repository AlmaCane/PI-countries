const { Router } = require("express");
const countryRouter = Router();
const {getCountryId, getCountries} = require("../handlers/countryHandler")

countryRouter.get("/", getCountries);
countryRouter.get("/:id", getCountryId);


module.exports = countryRouter;
