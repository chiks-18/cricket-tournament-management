const TEAM_API = "http://localhost:5000/api/teams";
const TOURNAMENT_API = "http://localhost:5000/api/tournaments";

async function loadDashboard() {

    try {

        // Load Teams
        const teamResponse = await fetch(TEAM_API);
        const teamResult = await teamResponse.json();

        const teams = teamResult.success ? teamResult.data : [];

        document.getElementById("totalTeams").innerText = teams.length;

        const latestTeams = document.getElementById("latestTeams");

        latestTeams.innerHTML = "";

        teams.slice(0, 5).forEach(team => {

            latestTeams.innerHTML += `

                <tr>

                    <td>${team.id}</td>

                    <td>${team.team_name}</td>

                </tr>

            `;

        });

        // Load Tournaments
        const tournamentResponse = await fetch(TOURNAMENT_API);
        const tournamentResult = await tournamentResponse.json();

        const tournaments = tournamentResult.success
            ? tournamentResult.data
            : [];

        document.getElementById("totalTournaments").innerText = tournaments.length;

        // Temporary values until Player & Match modules are built
        document.getElementById("totalPlayers").innerText = "0";
        document.getElementById("totalMatches").innerText = "0";

    } catch (error) {

        console.error(error);

    }

}

loadDashboard();