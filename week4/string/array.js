var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "letuce"];

function changes(){
    vegetables.pop()
    fruit.shift()
    var num = fruit.indexOf("orange")
    fruit.push(num)
   var len = vegetables.length
   vegetables.push(len)
   var food = fruit.concat(vegetables)
   food.splice(4,2)
   //var reverseFood = food.split("").reverse().join("")
   var reverse = food.reverse()
   var strFood = reverse.toString()
    console.log(strFood)
} changes()


