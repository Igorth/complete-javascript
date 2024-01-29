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
