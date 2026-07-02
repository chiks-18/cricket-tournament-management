const players = [

    {
        name: "Virat Kohli",
        mobile: "9876543210",
        team: "Royal Warriors",
        role: "Batsman",
        fee: "Yes"
    },

    {
        name: "Jasprit Bumrah",
        mobile: "9988776655",
        team: "Thunder Kings",
        role: "Bowler",
        fee: "Yes"
    }

];

const tableBody = document.getElementById("playerTableBody");
const searchPlayer = document.getElementById("searchPlayer");

function loadPlayers(list) {

    tableBody.innerHTML = "";

    list.forEach(player => {

        tableBody.innerHTML += `

        <tr>

            <td>${player.name}</td>
            <td>${player.mobile}</td>
            <td>${player.team}</td>
            <td>${player.role}</td>
            <td>${player.fee}</td>

            <td>

                <button>Edit</button>
                <button>Delete</button>

            </td>

        </tr>

        `;

    });

}

searchPlayer.addEventListener("keyup", () => {

    const keyword = searchPlayer.value.toLowerCase();

    const filtered = players.filter(player =>
        player.name.toLowerCase().includes(keyword)
    );

    loadPlayers(filtered);

});

loadPlayers(players);