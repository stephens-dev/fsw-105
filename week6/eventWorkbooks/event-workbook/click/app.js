// make the box disapear when the user clicks it
// Completed
var box = document.getElementById("box")

function blue() {
    box.style.backgroundColor = "blue"
}
box.addEventListener("mousedown", blue)
