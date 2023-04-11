const form = document.querySelector('form'); // Selects the form.
let selection = document.getElementById('crewmates'); // Grabs the selected option.

var i, option;

const onChange = () => {
    // 
}
// This function is called upon pressing submit
const submitVote = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the browser from refreshing;
        saveVote();
        document.getElementById("returnMessage").style.visibility = "visible";

        let vote = selection.value; // The dropdown menu's 'value'; what is currently selected
        json = JSON.stringify(vote);
    })
}

const saveVote = () => {
    const fs = require("fs");
    fs.readFile("./votes.json", "utf8", (err, jsonstring) => {
        if (err) {
            // Something here that tells the user on the site that something's wrong and their input didn't go through
            return;
        }
        try {
            const user = JSON.parse(jsonstring);
        } catch {
            // Something here that tells the user on the site that something's wrong and their input didn't go through
        }
    })
}

document.getElementById("returnMessage").innerHTML = "Your vote for the " + selection + " has pushed through successfully."