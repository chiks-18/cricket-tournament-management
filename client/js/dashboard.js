// Dummy data (will come from MySQL later)

const dashboardData = {

    totalTeams: 8,
    totalPlayers: 96,
    feesCollected: 48000,
    recentRegistrations: 5

};

document.getElementById("totalTeams").textContent =
dashboardData.totalTeams;

document.getElementById("totalPlayers").textContent =
dashboardData.totalPlayers;

document.getElementById("feesCollected").textContent =
"₹" + dashboardData.feesCollected.toLocaleString("en-IN");

document.getElementById("recentRegistrations").textContent =
dashboardData.recentRegistrations;