var countdownDate = new Date("June 12, 2023 13:00:00").getTime(); // Countdown until date

// Runs countdown every second
var countdown = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countdownDate - now;
        
    // Calculates days, hours, minutes, & seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if(timeleft <= 0){
        // add 7 days to Countdown Date
    }

    // Output
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("minutes").innerHTML = minutes + "m " 
    document.getElementById("seconds").innerHTML = seconds + "s"
}, 1000)

document.getElementById("defaultOpen").click();

function openProfile(event, sortType){
    var i, chapters, sortBtn;

    // Hides all elements with "chapters"
    chapters = document.getElementsByClassName("chapters");
    for (i = 0; i < chapters.length; i++) {
        chapters[i].style.display = "none";
    }

    // Gets elements with "sortBtn" and removes the "active" tag
    sortBtn = document.getElementsByClassName("sortBtn");
    for (i = 0; i < sortBtn.length; i++) {
        sortBtn[i].className = sortBtn[i].className.replace(" active", " ");
    }

    // Shows the current tab and sets it to "active"
    document.getElementById(sortType).style.display = "block";
    event.currentTarget.className += " active";
}