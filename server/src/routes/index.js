const { Router } = require("express");
const activityRouter = require("./activityRouter");
const countryRouter = require("./countryRouter");
const router = Router();

router.use("/activities", activityRouter);
router.use("/countries", countryRouter);

module.exports = router;
