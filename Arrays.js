const typesOfFood = ['Pizza', 'Sub', 'Pancakes', 'Hummus'];

typesOfFood.length

const favoriteAritst = ['Lil uzi vert', 'G Herbo', 'Brent Faiyaz'];
const randomEmojis = [''];
const eliteCoders = ['Janeth Ledezma', 'Sebastian Gayle', 'Daniel Lafrontant', 'Ariel Delaurra', 'Dave Molk', 'Jesser Jensen','driver', 'Cody Christ', 'navigator', 'Tyler Ashford'];
const carMakes = ['Ford', 'Acura', 'Porsche', 'Jeep', 'Chevy'];
const my2DArray = [['grass', 'water', 'dirt'],[]];
const sealTeams = ['SEAL TEAM 1', 'SEAL TEAM 2', 'SEAL TEAM 3', 'SEAL TEAM 4', 'SEAL TEAM 5', 'SEAL TEAM 6/Devgru', 'SEAL TEAM 7', 'SEAL TEAM 8'];

console.log(sealTeams);

// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()

//Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
//constructor: ƒ Number()
//toExponential: ƒ toExponential()
//toFixed: ƒ toFixed()
//toLocaleString: ƒ toLocaleString()
//toPrecision: ƒ toPrecision()
//toString: ƒ toString()
//valueOf: ƒ valueOf()
//__proto__: Object




// Methods


/*
let animalLength = animals.length; 
const carsAndProfessionals = cars.concat(professionals);
let animalLength = animals.length;
console.log(animalLength);
// 5
const carsAndProfessionals = cars.concat(professionals);
console.log(carsAndProfessionals);
// ["🚗", "🚙", "🏎", "🚕", "🚓", "👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(theDevLeague.indexOf('Brianna Giorgi'))
// 6
console.log(theDevLeague);
// ["Paula Bauerman", "Brandon Hall", "Thomas Duong", "Paul Knick", "Evan Woodworth", "Aaron Prince", "Brianna Giorgi", "Maurice Chevez", "Amanda Posey"]0: "Paula Bauerman"1: "Brandon Hall"2: "Thomas Duong"3: "Paul Knick"4: "Evan Woodworth"5: "Aaron Prince"6: "Brianna Giorgi"7: "Maurice Chevez"8: "Amanda Posey"length: 9__proto__: Array(0)
console.log(theDevLeague[6]);
// "Brianna Giorgi"
console.log(theDevLeague.indexOf('brianna giorgi'));
// -1
console.log(professionals.pop());
// "👨🏼‍⚖️"
console.log(professionals);
//  ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾"]
console.log(professionals.push('👨🏼‍⚖️'));
// 4
console.log(professionals);
// ["👨🏽‍🏫", "👩‍🍳", "👨🏽‍🌾", "👨🏼‍⚖️"]
console.log(cars.includes('Rome'));
// false
console.log(cars.includes('🚓'));
// true
console.log(numbers);
//  [1, 66, 48, 9, 23, 19, 20, 66, 30]
console.log(numbers.toString());
// "1,66,48,9,23,19,20,66,30"
let stringOfNumbers = numbers.toString();
console.log(stringOfNumbers);
"1,66,48,9,23,19,20,66,30"
console.log(stringOfNumbers.split(','));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"]
let moreStrings = "1-66-48-9-23-19-20-66-30";
console.log(moreStrings.split('-'));
// ["1", "66", "48", "9", "23", "19", "20", "66", "30"] */

// .reverse method/function
 const teams = ['bulls', 'rockets', 'kings', 'sun', 'nets', 'lakers'];
 teams.reverse();
 console.log(teams);

//  .sort method/functiontion
teams.sort();    //mutated array? YES
console.log(teams);

//.shift //shift removes something at the beginning
teams.shift();  //mutated arrary? YES
console.log(teams);

//.unshift add element at the beginning
teams.unshift('blazers'); //mutated array? YES
console.log(teams);

//for loop will be true until its not less than
for(let i = 1; 1 < teams.length; i++) {
    let teamElement = teams[i]; //
}

// 3 examples of using a for loop arrays

for(let x = 1; 1 < carMakes.length; x++) {
    let carCount = carMakes[x];
    console.log(carMakes);
}

for(let i = 2; 2 < sealTeams; i++) {
    console.log(`{i} {sealTeams}` trained);
}

for( let y = 2; y < sealTeams; i++) {
     let sealCheck = sealTeams[y];
     console.log(sealTeams);
}
