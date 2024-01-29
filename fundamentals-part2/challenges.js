'use strict';

/*
Create an arrow function calcAverage to calculate the average of 3 scores. 
This function should have three parameters and return a single number (
the average score).
*/
const calcAverage = (score0, score1, score3) => {
  const average = (score0 + score1 + score3) / 3;
  return average;
};

/*
Create two new variables — scoreDolphins and scoreKoalas, and assign the value 
returned from the calcAverage function to them (you will need to call this 
function, and pass scores as arguments).
*/
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

/*
Create a function checkWinner that takes the average score of each team as 
parameters (avgDolphins and avgKoalas), and then logs the winner to the console,
 together with the victory points, according to the rule above. 
 Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of 
  hard-coded values).
*/
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
