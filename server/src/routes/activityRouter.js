const { Router } = require("express");
const activityRouter = Router();
const {postActivity, getActivities} = require("../handlers/activityHandler")

activityRouter.get("/",  getActivities);
activityRouter.post("/", postActivity);

module.exports = activityRouter;
