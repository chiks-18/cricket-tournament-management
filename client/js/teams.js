const API_URL = "http://localhost:5000/api/teams";

const teamForm = document.getElementById("teamForm");
const teamTable = document.getElementById("teamTable");
const searchTeam = document.getElementById("searchTeam");
const teamCount = document.getElementById("teamCount");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEdit = document.getElementById("cancelEdit");

let teams = [];
let editId = null;

async function loadTeams() {

    const response = await fetch(API_URL);
    const result = await response.json();

    teams = result.data;

    renderTeams(teams);

}

function renderTeams(data) {

    teamTable.innerHTML = "";

    teamCount.innerText = data.length;

    data.forEach(team => {

        teamTable.innerHTML += `

        <tr>

            <td>${team.id}</td>

            <td>${team.team_name}</td>

            <td>

                <button class="edit-btn"
                onclick="editTeam(${team.id},'${team.team_name}')">

                ✏

                </button>

                <button class="delete-btn"
                onclick="deleteTeam(${team.id})">

                🗑

                </button>

            </td>

        </tr>

        `;

    });

}

teamForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const team_name = document.getElementById("team_name").value.trim();

    if (team_name === "") return;

    if (editId === null) {

        await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ team_name })

        });

    } else {

        await fetch(`${API_URL}/${editId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ team_name })

        });

        resetForm();

    }

    teamForm.reset();

    loadTeams();

});

async function deleteTeam(id) {

    if (!confirm("Delete Team?")) return;

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    loadTeams();

}

function editTeam(id, name) {

    editId = id;

    document.getElementById("team_name").value = name;

    formTitle.innerText = "Edit Team";

    submitBtn.innerText = "Update Team";

    cancelEdit.style.display = "inline-block";

}

cancelEdit.addEventListener("click", resetForm);

function resetForm() {

    editId = null;

    formTitle.innerText = "Add Team";

    submitBtn.innerText = "Add Team";

    cancelEdit.style.display = "none";

    teamForm.reset();

}

searchTeam.addEventListener("keyup", () => {

    const keyword = searchTeam.value.toLowerCase();

    renderTeams(

        teams.filter(team =>
            team.team_name.toLowerCase().includes(keyword)
        )

    );

});

loadTeams();