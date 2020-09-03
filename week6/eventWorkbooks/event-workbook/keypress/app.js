/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

// Completed
var out = document.getElementById("output")
window.addEventListener("keydown",function(e) {
var x = event.keyCode; // Unicode value
var y = String.fromCharCode(x); // Convert the value to Character
out.textContent = "You pressed: "+ x + " It's key code is: "+ y;
});
