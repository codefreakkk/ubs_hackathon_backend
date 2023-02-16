const express = require("express");
const router = express.Router();
const jobController = require("../controller/jobController");

router.get("/getalljobs", jobController.getAllJobs);
router.get("/getjobbyid/:id", jobController.getJobById);
router.get("/getrecommnededusers/:id", jobController.getRecomendedUser);
router.post("/addjobs", jobController.addJobs);

module.exports = router;
