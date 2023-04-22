const fileSystem = require("browserify-fs");
const form = document.querySelector('form'); // Selects the form.

let obj = {
    "vote": document.getElementById('crewmates') // Grabs the selected option.
}

let jsonObj = JSON.stringify(obj);

// Called upon pressing submit
const submitVote = () => {

    form.addEventListener('submit', handleForm);

    const handleForm = (e) => {

        e.preventDefault(); // Prevents the browser from refreshing;
        e.stopPropagation();
        debugger;

        saveVote(); // Saves the selected option as a JSON string

        // Success message
        document.getElementById("returnMessage").innerHTML = "Your vote for the " + selection.vote + " has pushed through successfully."
        document.getElementById("returnMessage").style.display = "block";
    }

    const saveVote = () => {

        fileSystem.writeFile("./votes.json", jsonObj, err => {
            if (err) {
                console.log("Error writing file", err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
    }
}