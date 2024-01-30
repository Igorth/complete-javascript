'use strict';

// FUNCTIONS
// ********************************

// function logger() {
//   console.log('H');
// }
// // calling / running / invoking the function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ////////////////////////////////

// // Function declaration
// function calcAge1(birthYear) {
//   return 2034 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2034 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// // Arrow function
// const calcAge3 = birthYear => 2034 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, 'John'));

// ////////////////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor2(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor2(2, 3));

////////////////////////////////////////////////////////////////////
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, 'John'));
// console.log(yearsUntilRetirement(1970, 'Mary'));
////////////////////////////////////////////////////////////////////

// ARRAYS
// ********************************

// const friends = ['John', 'Mary'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'Jane';
// console.log(friends);

// const firstName = 'John';
// const john = [firstName, 'Schmedtman', 2034 - 1991, friends];
// console.log(john);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsArr = [1990, 1991, 1992, 1993];
// console.log(calcAge(yearsArr[0]));

// const ages = [calcAge(yearsArr[0])];
// console.log(ages);

////////////////////////////////////////////////////////////////////

// const friends = ['John', 'Mary', 'Peter'];
// // Add elements
// friends.push('Jane');
// console.log(friends);
// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Mary'));

// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Mary'));
// console.log(friends.includes('Peter'));
// console.log(friends.includes(23));

// if (friends.includes('Mary')) {
//   console.log('Mary is in the friends array');
// }

////////////////////////////////////////////////////////////////////

// OBJECTS

// const john = {
//   firstName: 'John',
//   lastName: 'Schmedtman',
//   age: 2034 - 1991,
//   job: 'Software Engineer',
//   friends: ['Michael', 'Mary', 'Peter'],
// };
// console.log(john);
// console.log(john.firstName);
// console.log(john['firstName']);

// const nameKey = 'Name';
// console.log(john['first' + nameKey]);
// console.log(john['last' + nameKey]);

// //const interestedIn = prompt('What do you want?');
// // console.log(john['job']);

// // if (john[interestedIn]) {
// //   console.log(john[interestedIn]);
// // } else {
// //   console.log("I don't know about that");
// // }

// john.location = 'New York';
// john['twitter'] = '@tefsdf';
// console.log(john);

// const message = `${john.firstName} has ${john.friends.length} friends,
// and his best friend is called ${john.friends[0]}`;
// console.log(message);

////////////////////////////////////////////////////////////////////

// OBJECTS METHODS

// const john = {
//   firstName: 'John',
//   lastName: 'Schmedtman',
//   birthYear: 1991,
//   job: 'Software Engineer',
//   friends: ['Michael', 'Mary', 'Peter'],
//   hasDriverLicense: false,

//   calAge: function () {
//     this.age = 2034 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calAge()}--year old ${this.job},
//     and he has ${
//       this.hasDriverLicense ? 'a driver license' : 'no driver license'
//     }`;
//   },
// };

// console.log(john.calAge());
// console.log(john.age);
// console.log(john.getSummary());
////////////////////////////////////////////////////////////////////

// LOOPS

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting repetitions ${i} times`);
// }

// const johnArray = [
//   'John',
//   'Smith',
//   2035 - 1991,
//   'teacher',
//   ['Michael', 'Mary', 'Peter'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < johnArray.length; i++) {
//   console.log(johnArray[i]);
//   types.push(typeof johnArray[i]);
// }

// console.log(types);
// for (let i = 0; i < types.length; i++) {
//   console.log(types[i]);
// }

// const years = [1990, 1991, 1992];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2034 - years[i]);
// }
// console.log(ages);

// Continue and break
// const johnArray = [
//   'John',
//   'Smith',
//   2035 - 1991,
//   'teacher',
//   ['Michael', 'Mary', 'Peter'],
//   true,
// ];
// console.log('----CONTINUE----');
// for (let i = 0; i < johnArray.length; i++) {
//   if (typeof johnArray[i] !== 'string') {
//     continue;
//   }
//   console.log(johnArray[i]);
// }
// console.log('----BREAK----');
// for (let i = 0; i < johnArray.length; i++) {
//   if (typeof johnArray[i] === 'number') {
//     break;
//   }
//   console.log(johnArray[i]);
// }

////////////////////////////////////////////////////////////////////

// LOOPS

// const johnArray = [
//   'John',
//   'Smith',
//   2035 - 1991,
//   'teacher',
//   ['Michael', 'Mary', 'Peter'],
//   true,
// ];

// for (let i = johnArray.length + 1; i >= 0; i--) {
//   console.log(johnArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`  Repetition ${rep}`);
//   }
// }

////////////////////////////////////////////////////////////////////

// WHILE LOOPS
// let rep = 1;
// while (rep <= 5) {
//   console.log(`Repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`Dice ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) {
//     console.log('You rolled a 6!');
//   }
// }
