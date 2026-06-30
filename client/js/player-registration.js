document.getElementById("playerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const player = {

        fullName: document.getElementById("fullName").value,
        mobile: document.getElementById("mobile").value,
        team: document.getElementById("team").value,
        role: document.getElementById("role").value,
        battingStyle: document.getElementById("battingStyle").value,
        bowlingStyle: document.getElementById("bowlingStyle").value,
        feePaid: document.getElementById("feePaid").value

    };

    console.log(player);

    alert("Player Registration UI Completed ✅");

});