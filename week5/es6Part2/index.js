// Problem 1 Complete
const manName = "John"
const age = 101

function runForLoop(pets){
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i]}
        
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", manName)
    return petObjects
}

runForLoop(["cat", "dog"])
    
// Problem 2 Complete
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot}
    })
}
console.log(mapVegetables([carrots]))
    
// Problem 3 Complete
const people = [
    {
        name: "princess peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly : true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const friendly = filterForFriendly = arr => {
    return arr.filter(function(person){
        return person.friendly
    })

}
console.log(friendly(people))
  
// Problem 4 Complete
 doMathSum = (a,b) => {
    return a+b
}

 produceProduct = (a,b) => {
    return a*b
}
console.log(doMathSum(2,2))
console.log(produceProduct(2,2))
// Problem 5 Complete
printString = (fName,lName,age) => {
    return "Hi " + fName + lName + " how dose it feel to be " + age;
}
console.log(printString("Jane ","Doe",100))
// Problem 6

printString1 = () => {
    return "Hi " + `Jane ` + `Doe ` + "how dose it feel to be " + `100`;
}
console.log(printString1())
 
// Problem 7
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = animals.filter(animal => animal.type === "dog")
console.log(filterForDogs)

// Problem 8 


 welcomeMessage =() => {
     return "Hi " + `Janice`  +" Welcome to " +`Hawaii` + " I hope you enjoy your stay. Please ask the president of "+`Hawaii`+" if you need anything."
 }
 console.log(welcomeMessage())
 