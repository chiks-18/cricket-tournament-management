const teamForm = document.getElementById("teamForm");
const teamName = document.getElementById("teamName");
const teamList = document.getElementById("teamList");

let teams = [];

teamForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = teamName.value.trim();

    if (name === "") return;

    teams.push(name);

    displayTeams();

    teamForm.reset();

});

function displayTeams() {

    teamList.innerHTML = "";

    teams.forEach((team, index) => {

        teamList.innerHTML += `

            <div class="team-card">

                <h3>${team}</h3>

                <button
                    class="delete-btn"
                    onclick="deleteTeam(${index})">

                    Delete

                </button>

            </div>

        `;

    });

}

function deleteTeam(index){

    teams.splice(index,1);

    displayTeams();

}