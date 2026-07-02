const express = require("express");

const router = express.Router();

const {
    getTournaments,
    addTournament,
    deleteTournament
} = require("../controllers/tournamentController");

router.get("/", getTournaments);

router.post("/", addTournament);

router.delete("/:id", deleteTournament);

module.exports = router;