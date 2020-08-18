function upperCase(string) {
 
 console.log(string.toUpperCase())
 console.log(string.toLowerCase())
}
upperCase("hello string")

function halfRounded(string){
var num = string.length
var res = num / 2

console.log(Math.floor(res))
} halfRounded("hello string")

function firstHalf(string){
var divide = string.length
var half = divide / 2
var res = string.slice(0,half)
console.log(res)
} firstHalf("hello string")

function captilizeAndLowerCase(string){
var len = string.length
var split = len / 2
var first = string.slice(0,split)
var second = string.slice(split)
console.log(first.toUpperCase() , second.toLowerCase())
} captilizeAndLowerCase("hello string ")