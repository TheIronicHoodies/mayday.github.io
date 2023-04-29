function openSideBar() {
    document.getElementById("sidemenu").style.width = "310px";
    document.getElementById("sidemenu").style.left = "0px"
    document.getElementById("main").style.marginLeft = "0px";
}
function closeSideBar() {
    document.getElementById("sidemenu").style.width = "5px";
    document.getElementById("sidemenu").style.left = "-295px"
    document.getElementById("main").style.marginLeft= "0px";
}