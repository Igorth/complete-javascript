'use strict';

// Challenge 1

// /*
// Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (
// the average score).
// */
// const calcAverage = (score0, score1, score3) => {
//   const average = (score0 + score1 + score3) / 3;
//   return average;
// };

// /*
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value
// returned from the calcAverage function to them (you will need to call this
// function, and pass scores as arguments).
// */
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// /*
// Create a function checkWinner that takes the average score of each team as
// parameters (avgDolphins and avgKoalas), and then logs the winner to the console,
//  together with the victory points, according to the rule above.
//  Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of
//   hard-coded values).
// */
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//   } else {
//     console.log('No team wins...');
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

////////////////////////////////////////////////////////////////////

// Challenge 2

/*
Write a function calcTip that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above 
(you can check out the code from the first tip calculator challenge if 
  you need to). Use the function type you like the most. 
  Test the function using a bill value of 100.
*/

// const calcTip = bill => {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// // function calcTip(bill) {
// //   const tip = bill * 0.15;
// //   return tip;
// // }

// /*
// And now let's use arrays! So, create an array called bills containing the
// test data below.
// */
// const bills = [125, 555, 44];

// /**
//  * Create an array called tips containing the tip value for each bill,
//  * calculated from the function you created before.
//  *
//  */
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// /**
//  * BONUS: Create an array totals containing the total values,
//  * so the bill + tip.
//  */
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

////////////////////////////////////////////////////////////////////

// Challenge 3

/**
 * For each of them, create an object with properties
 * for their full name, mass, and height
 * (Mark Miller and John Smith). Name these objects
 * as mark and john, and their properties exactly
 * as fullName, mass and height.
 */

/**
 * Create a calcBMI method on each object to calculate
 * the BMI (the same method on both objects).
 * Assign the BMI value to a property, and also
 * return it from the method.
 */

/**
 * Log to the console who has the higher BMI,
 * together with the full name and the respective BMI.
 * Example: "John Smith's BMI (28.3) is higher than
 * Mark Miller's (23.9)!".
 */

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName} is a BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName} is a BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`
//   );
// }

////////////////////////////////////////////////////////////////////

// Challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/**
 * Create an array called bills containing all 10 test bill values.
 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/**
 * Create empty arrays for the tips and the totals (tips and totals)
 */
const tips = [];
const totals = [];

/**
 * Use the calcTip function we wrote before (included in the
 * starter code) to calculate tips and total values (bill + tip)
 * for every bill value in the bills array. Use a for loop to
 * perform the 10 calculations!
 */
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}
console.log(tips);
console.log(totals);

/**
 * Write a function calcAverage which takes an array called arr
 * as an argument. This function calculates the average of
 * all numbers in the given array.
 */

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
