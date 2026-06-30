const db = require("../config/database");

// Get All Teams
const getTeams = (req, res) => {

    const sql = "SELECT * FROM teams ORDER BY id DESC";

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

// Add Team
const addTeam = (req, res) => {

    // Debug request body
    console.log("Request Body:", req.body);

    const { team_name } = req.body;

    if (!team_name) {
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

        res.status(201).json({
            success: true,
            message: "Team added successfully.",
            teamId: result.insertId
        });

    });

};

// Delete Team
const deleteTeam = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM teams WHERE id = ?";

    db.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Team deleted successfully."
        });

    });

};

module.exports = {
    getTeams,
    addTeam,
    deleteTeam
};