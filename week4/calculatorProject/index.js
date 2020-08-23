var readlineSync = require("readline-sync");
var firstNum = readlineSync.questionInt("Enter first number: ");
var secNum = readlineSync.questionInt("Enter second number: ");
var enteredOperator = readlineSync.question("What operation do you want to preform? add/sub/mul/div/quit: ");

function addTwoNumbers( num1, num2){
    return num1 + num2;
}
function subTwoNumbers( num1, num2){
    return num1 - num2;
}function mulTwoNumbers( num1, num2){
    return num1 * num2;
}function divTwoNumbers( num1, num2){
    return num1 / num2;
}
if (enteredOperator == "add"){
    console.log(addTwoNumbers(firstNum, secNum));
}
else if (enteredOperator == "sub"){
    console.log(subTwoNumbers(firstNum, secNum));
}
else if (enteredOperator == "mul"){
    console.log(mulTwoNumbers(firstNum, secNum));
}
else if (enteredOperator == "div"){
    console.log(divTwoNumbers(firstNum, secNum));
}
else if (enteredOperator == "quit"){
    console.log(
        "Thank you for using this program"
    );
}