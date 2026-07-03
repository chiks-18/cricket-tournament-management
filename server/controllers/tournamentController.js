const db = require("../config/database");

// ==============================
// Get All Tournaments
// ==============================

exports.getTournaments = (req, res) => {

    const sql = "SELECT * FROM tournaments ORDER BY id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: result
        });

    });

};

// ==============================
// Add Tournament
// ==============================

exports.addTournament = (req, res) => {

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
        prize_pool
    } = req.body;

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
            prize_pool
        )
        VALUES (?,?,?,?,?,?,?,?,?,?,?)
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
            prize_pool
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Tournament created successfully.",
                tournamentId: result.insertId
            });

        }
    );

};

// ==============================
// Delete Tournament
// ==============================

exports.deleteTournament = (req, res) => {

    db.query(
        "DELETE FROM tournaments WHERE id=?",
        [req.params.id],
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Tournament deleted successfully."
            });

        }
    );

};