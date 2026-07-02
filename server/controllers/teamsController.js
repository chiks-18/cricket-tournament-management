const db = require("../config/database");

// ==============================
// Get All Teams
// ==============================

exports.getTeams = (req, res) => {

    const sql = "SELECT * FROM teams ORDER BY id DESC";

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
// Add Team
// ==============================

exports.addTeam = (req, res) => {

    const { team_name } = req.body;

    if (!team_name || team_name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Team name is required."
        });
    }

    const sql = "INSERT INTO teams (team_name) VALUES (?)";

    db.query(sql, [team_name], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Team added successfully.",
            teamId: result.insertId
        });

    });

};

// ==============================
// Update Team
// ==============================

exports.updateTeam = (req, res) => {

    const { id } = req.params;
    const { team_name } = req.body;

    if (!team_name || team_name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Team name is required."
        });
    }

    const sql = "UPDATE teams SET team_name=? WHERE id=?";

    db.query(sql, [team_name, id], (err) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Team updated successfully."
        });

    });

};

// ==============================
// Delete Team
// ==============================

exports.deleteTeam = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM teams WHERE id=?";

    db.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Team deleted successfully."
        });

    });

};