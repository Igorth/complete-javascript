'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 55 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('1234');
// createBooking('5678', 2, 100);
// createBooking('1234', undefined, 100);
// createBooking('1234', 8);

// const flight = 'LH1234';
// const john = {
//   firstName: 'John',
//   passport: 324234233,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.firstName = 'Mrs.' + passenger.firstName;

//   if (passenger.passport === 324234233) {
//     console.log('You have checked in');
//   } else {
//     console.log('You have not checked in');
//   }
// };

// checkIn(flight, john);
// console.log(flight);
// console.log(john);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };
// newPassport(john);
// console.log(john);
// checkIn(flight, john);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

/////////////////////////////////////////////////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // Callback function, we tell javascript to call them later
// transformer('hello world', upperFirstWord);
// console.log('------------------------------------------');
// transformer('hello world', oneWord);

// const high5 = function () {
//   console.log('Hight 5');
// };
// // Calback function
// document.body.addEventListener('click', high5);

// const array = ['Jonas', 'Maria', 'J'];
// array.forEach(high5);
