// Responsize menu driver
function small_menu() {
    var x = document.getElementById("myNav");
    if (x.className === "nav_menu") {
        x.className += " responsive";
    } else {
        x.className = "nav_menu";
    }
}