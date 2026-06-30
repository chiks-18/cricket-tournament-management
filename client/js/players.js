const players = [

    {
        name: "Virat Kohli",
        mobile: "9876543210",
        age: 36,
        team: "Royal Warriors",
        role: "Batsman",
        city: "Pune"
    },

    {
        name: "Rohit Sharma",
        mobile: "9988776655",
        age: 38,
        team: "Mumbai Kings",
        role: "Batsman",
        city: "Mumbai"
    }

];

const tableBody = document.getElementById("playerTableBody");

function loadPlayers(data){

    tableBody.innerHTML="";

    data.forEach(player=>{

        tableBody.innerHTML += `

        <tr>

            <td>${player.name}</td>

            <td>${player.mobile}</td>

            <td>${player.age}</td>

            <td>${player.team}</td>

            <td>${player.role}</td>

            <td>${player.city}</td>

            <td>

                <button class="delete-btn">
                    Delete
                </button>

            </td>

        </tr>

        `;

    });

}

loadPlayers(players);

const search=document.getElementById("searchPlayer");

search.addEventListener("keyup",()=>{

    const value=search.value.toLowerCase();

    const filtered=players.filter(player=>

        player.name.toLowerCase().includes(value)

    );

    loadPlayers(filtered);

});