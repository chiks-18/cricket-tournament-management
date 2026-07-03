const express = require("express");

const router = express.Router();

const tournamentController = require("../controllers/tournamentController");

// Get All Tournaments
router.get("/", tournamentController.getTournaments);

// Add Tournament
router.post("/", tournamentController.addTournament);

// Delete Tournament
router.delete("/:id", tournamentController.deleteTournament);

module.exports = router;