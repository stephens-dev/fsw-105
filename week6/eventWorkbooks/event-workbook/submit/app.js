// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
//Complete
var num = document.getElementById("number")
var date = document.getElementById("date")
var color = document.getElementById("color")
var range = document.getElementById("range")
var radio = document.getElementById("radio")
var check = document.getElementById("checkbox")
var sub = document.getElementById("submit-me")


sub.addEventListener("submit", function(e) {
event.preventDefault()
alert("num: "+num.value+ "\n date: "+ date.value + "\n color: " + color.value + "\n range: " + range.value + "\n radio: "+ radio.value + "\n checkbox: "+ check.value)
})