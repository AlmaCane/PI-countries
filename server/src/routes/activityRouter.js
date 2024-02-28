const { Router } = require("express");
const activityRouter = Router();
const {postActivity, getActivities, deleteAct, putActivity} = require("../handlers/activityHandler")

activityRouter.get("/",  getActivities);
activityRouter.post("/", postActivity);
activityRouter.delete("/:nombre", deleteAct);
activityRouter.put("/:nombre", putActivity )

module.exports = activityRouter;
