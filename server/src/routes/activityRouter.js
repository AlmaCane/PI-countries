const { Router } = require("express");
const activityRouter = Router();
const {getAllActivities, postActivities} = require("../handlers/activityHandler")

activityRouter.get("/", getAllActivities);
activityRouter.post("/", postActivities);

module.exports = activityRouter;
