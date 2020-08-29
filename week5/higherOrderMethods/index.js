// section A
var arr1 = [3, 6, 8, 2]
var greaterThanFive = arr1.filter(function (num) {
    return num >= 5
})
console.log(greaterThanFive)

var evenNum = arr1.filter(function (num) {
    return num % 2 === 0
})
console.log(evenNum)

// section B
var arr2 = [2, 5, 100]
var arrN = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var doubleNum = arr2.map(function (num) {
    return num + num
})
console.log(doubleNum)

var stringItUp = arr2.map(function (num) {
    return num.toString()
})
console.log(stringItUp)

var capName = arrN.map(function (name) {
    return name[0].toUpperCase()
})
console.log(capName)

// section C
var arr3 = [1, 2, 3]
var voters = [{
        name: "Bob",
        age: 30,
        voted: true
    },
    {
        name: "Jake",
        age: 32,
        voted: true
    },
    {
        name: "Kate",
        age: 25,
        voted: false
    },
    {
        name: "Sam",
        age: 20,
        voted: false
    },
    {
        name: "Phil",
        age: 21,
        voted: true
    },
    {
        name: "Ed",
        age: 55,
        voted: true
    },
    {
        name: "Tami",
        age: 34,
        voted: true
    },
    {
        name: "Mary",
        age: 31,
        voted: false
    },
    {
        name: "Becky",
        age: 43,
        voted: false
    },
    {
        name: "Joey",
        age: 41,
        voted: true
    },
    {
        name: "Jeff",
        age: 30,
        voted: true
    },
    {
        name: "Zack",
        age: 19,
        voted: false
    }
]

var sum = arr3.reduce(function (final, num) {
    final += num
    return final
})
console.log(sum)

var stringnum1 = arr3.join("")
console.log(stringnum1)


var voteCount = voters.reduce(function (final, voter) {
    if (voter.voted) {
        final++
    }
    return final
}, 0)
console.log(voteCount)
// section D
var arr4 = [1, 3, 5, 2, 90, 20]
var arrWord = ["by", "dog", "wolf", "eaten", "family"]

var arrS = arr4.sort(function (a, b) {
    return a - b
})
console.log(arrS)

var arrB = arr4.sort(function (a, b) {
    return a + b
})
console.log(arrB.reverse())

arrWord.sort(function (a, b) {
    return a.length - b.length
})
console.log(arrWord)