// coorinates need to reset
var out = document.getElementById("output")
var inp = document.getElementById("redBox")

inp.addEventListener("mousemove",function(e) {
var x = event.clientX;
var y = event.clientY;
out.textContent = "X: "+ x +"Y: "+ y;
});

