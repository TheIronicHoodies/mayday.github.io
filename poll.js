// This function is called upon changing the selection
const onChange = () => {
    //
}

// This function is called upon pressing submit
const submitVote = () => {
    form.addEventListener('submit', () => {
        e.preventDefault(); // Prevents the browser from refreshing;

        let vote = document.getElementById('crewmates').value; // The dropdown menu's 'value'; what is currently selected
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