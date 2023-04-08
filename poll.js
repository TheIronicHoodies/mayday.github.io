let selection = document.getElementById('crewmates');

// This function is called upon pressing submit
const submitVote = () => {
    form.addEventListener('submit', () => {
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

document.getElementById("success").innerHTML = "Your vote for the " + selection + " has pushed through successfully."