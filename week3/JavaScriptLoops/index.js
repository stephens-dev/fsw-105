var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

function isOldEnough() {
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("is old enough")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log("not old enough")
        }
    }
}


isOldEnough();

function isOldEnoughWithName() {
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age< 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
        }
        }
    }
    isOldEnoughWithName();


    function personalizedOldEnough() {
        for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " can see the movie he is old enough")
            } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " can not see the movie he is not old enough")
            } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="female") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " can see the movie she is old enough")
            } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="female") {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " can not see the movie she is not old enough")
            } 
        }
    }
    personalizedOldEnough();

    function evenOdd(){
        for (i = 0; i <= 100; i++){
            if ([i] % 2 === 0){
                console.log([i] + " is an even number")
            } else{
                console.log([i] + " is an odd number")
            }
        }
    }
    evenOdd()