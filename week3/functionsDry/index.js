// Addition function
function add(num1 , num2) {
    return num1 + num2;
}
console.log(add(5,2))

// Greatest number function
function bigNum(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3) {
        console.log(num1)
    }else if(num2 >= num1 && num2 >= num3){
        console.log(num2)
    }else if(num3 >= num1 && num3 >= num2){
        console.log(num3)
    }
}
bigNum(9,3,7)

// even or odd function
function evenOdd(num1) {
    if (num1 % 2 === 0){
        console.log(num1 + " is a even number")
    }else{
        console.log(num1 + " is a odd number")
    }
}
evenOdd(5)
// returns the string 2 times if less than 20 characters or first half if more
var sentence = " This is a long string"
console.log(sentence.length)
if (sentence.length <= 20){
    console.log(sentence + sentence)
}else { var num = sentence.length / 2
    console.log(sentence.slice(0,num))
}