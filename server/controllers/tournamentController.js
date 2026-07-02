const db = require("../config/database");

// Get All Tournaments
const getTournaments = (req, res) => {

    const sql = "SELECT * FROM tournaments ORDER BY id DESC";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: results
        });

    });

};

// Add Tournament
const addTournament = (req, res) => {

    const {
        tournament_name,
        organizer_name,
        location,
        start_date,
        end_date,
        ball_type,
        match_type,
        overs,
        max_teams,
        entry_fee,
        prize_pool,
        status
    } = req.body;

    if (
        !tournament_name ||
        !organizer_name ||
        !location ||
        !start_date ||
        !end_date ||
        !ball_type ||
        !match_type ||
        !overs ||
        !max_teams
    ) {
        return res.status(400).json({
            success: false,
            message: "Please fill all required fields."
        });
    }

    const sql = `
        INSERT INTO tournaments
        (
            tournament_name,
            organizer_name,
            location,
            start_date,
            end_date,
            ball_type,
            match_type,
            overs,
            max_teams,
            entry_fee,
            prize_pool,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            tournament_name,
            organizer_name,
            location,
            start_date,
            end_date,
            ball_type,
            match_type,
            overs,
            max_teams,
            entry_fee,
            prize_pool,
            status
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Tournament created successfully.",
                tournamentId: result.insertId
            });

        }
    );

};

// Delete Tournament
const deleteTournament = (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM tournaments WHERE id = ?",
        [id],
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(200).json({
                success: true,
                message: "Tournament deleted successfully."
            });

        }
    );

};

module.exports = {
    getTournaments,
    addTournament,
    deleteTournament
};