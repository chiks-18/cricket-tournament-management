const API_URL = "http://localhost:5000/api/tournaments";

const form = document.getElementById("tournamentForm");
const table = document.getElementById("tournamentTable");

async function loadTournaments() {

    const response = await fetch(API_URL);
    const result = await response.json();

    table.innerHTML = "";

    result.data.forEach(tournament => {

        table.innerHTML += `

        <tr>

            <td>${tournament.id}</td>

            <td>${tournament.tournament_name}</td>

            <td>${tournament.location}</td>

            <td>${tournament.max_teams}</td>

            <td>${tournament.status}</td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteTournament(${tournament.id})">

                    🗑

                </button>

            </td>

        </tr>

        `;

    });

}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const tournament = {

        tournament_name: document.getElementById("tournament_name").value,
        organizer_name: document.getElementById("organizer_name").value,
        location: document.getElementById("location").value,
        start_date: document.getElementById("start_date").value,
        end_date: document.getElementById("end_date").value,
        ball_type: document.getElementById("ball_type").value,
        match_type: document.getElementById("match_type").value,
        overs: document.getElementById("overs").value,
        max_teams: document.getElementById("max_teams").value,
        entry_fee: document.getElementById("entry_fee").value || 0,
        prize_pool: document.getElementById("prize_pool").value || 0

    };

    await fetch(API_URL, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(tournament)

    });

    form.reset();

    loadTournaments();

});

async function deleteTournament(id) {

    if (!confirm("Delete Tournament?")) return;

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    loadTournaments();

}

loadTournaments();