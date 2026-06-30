const express = require("express");
const router = express.Router();

const {
    getTeams,
    addTeam,
    deleteTeam
} = require("../controllers/teamsController");

router.get("/", getTeams);
router.post("/", addTeam);
router.delete("/:id", deleteTeam);

module.exports = router;