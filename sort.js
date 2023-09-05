function sortList() {

    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('userInput'); // User input.
    filter = input.value.toUpperCase(); // The user input in uppercase letters to disable case sensitivity.
    ul = document.getElementById("entries"); // The ID of the unordered list.
    li = ul.getElementsByTagName('li'); // Each individual item in the list.

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}