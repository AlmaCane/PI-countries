const { Router } = require("express");
const activityRouter = Router();
const {postActivity, getActivities, deleteAct} = require("../handlers/activityHandler")

activityRouter.get("/",  getActivities);
activityRouter.post("/", postActivity);
activityRouter.delete("/:nombre", deleteAct);

module.exports = activityRouter;
