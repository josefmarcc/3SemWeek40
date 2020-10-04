
// PART 1:
// create an Array
let people = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

// Filtered Array with people containing letter a
let peopleOnlyA = people.filter(people => people.includes("a"))
console.log(peopleOnlyA)

// Reverse the Strings in array
let peopleReverse = people.map(people => people.split("").reverse().join(""))
console.log(peopleReverse)


// PART 2:
// A 

function filterThis(array) {
    if (array.includes("a")) {
        return array
    }
}

function myFilter(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        if (callback(element)) {
            const newItem = element
            arrayCopy.push(newItem)
        }
    });
    return arrayCopy;
}

let listitems2 = myFilter(filterThis, people);
console.log(listitems2)



//B
function makeListItem(str) {
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");
    return joinArray;
}


function myMap(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

let listitems = myMap(makeListItem, people);
console.log(listitems)


// PART 3:

//A
const numbers = [1, 3, 5, 10, 11];

const result = numbers.map((x, index) => x + numbers[index + 1] || 0)

console.log(result)

//B
var persons = [{ name: "Hassan", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }];

const aLinks = "<nav>" + persons.map((person) =>
    `<a href => ${person.name}</a>`
).join("\n") + "</nav>"

console.log(aLinks)


//C
const tableRows = persons.map((person) =>
    `<tr>
        <td>${person.name}</td>
        <td>${person.phone}</td>
    </tr>`
).join("")
console.log(tableRows)


// PART 4:
//A
var all = ["Hassan", "Peter", "Carla", "Boline"];

const allPrint = all.map(x => x).join("#");

console.log(allPrint);

//B
let numbers2 = [2, 3, 67, 33];

let sum = numbers2.reduce(function (total, amount) {
    return total + amount
});

console.log(sum);

//C 
let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

let reducer = function (accumulator, member, index, members) {
    var calculatedValue = accumulator + member.age;

    if (index === members.length - 1) {
        return calculatedValue / members.length;
    }

    return calculatedValue;
}
let result2 = members.reduce(reducer, 0);

console.log("Exercise C: Average age: " + result2)  

//D
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

let votesAmount = votes.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
}, {});

console.log(votesAmount);


