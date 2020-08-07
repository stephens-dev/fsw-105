// Preliminaries:
if (5 > 3) {
    console.log("is greater than")
} else {
    console.log("not greater than")
}

var word = "cat"
var n = word.length
if (n === 3) {
    console.log("is the length")
} else {
    console.log("is not the length")
}

if ("cat" === "dog") {
    console.log("is the same")
} else {
    console.log("not the same")
}
// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18) {
    console.log("can see the movie")
} else {
    console.log("cannot see the movie")
}

if (person.name.charAt(0) === "B") {
    console.log("can see the movie")
} else {
    console.log("cannot see the movie")
}

if (person.age >= 18 && person.name.charAt(0) === "B") {
    console.log("Can see the movie")
} else {
    console.log("Cannot see the movie")
} 
// Silver Medal
if (1 === "1") {
    console.log("strict")
}else if (1 == "1"){
    console.log("loose")
}else {
    console.log("dose not equal at all")
}

if (1 <= 2 && 2 == 4) {
    console.log("yes")
}else{
    console.log("no")
}
// Gold Medal
var dog = "dog"
console.log(typeof dog)

if ("true" === Boolean) {
console.log("Boolean")
}else{
    console.log("not a Boolean")
}

if ("s" > 12){
    console.log("is greater than")
}else {
    console.log("is not greater than")
}

if ("ssdfg" > 12454){
    console.log("is greater than")
}else {
    console.log("is not greater than")
}