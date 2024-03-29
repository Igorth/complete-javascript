'use strict';

const restaurant = {
  name: 'My Restaurant',
  location: 'Villa Angeles, Firenze, Italy',
  categories: ['Pizza', 'Italian', 'Mexican', 'Vegetarian'],
  starterMenu: ['Foccacia', 'Garlic Bread', 'Cheese Burger', 'Salad'],
  mainMenu: ['Pizza', 'Risoto', 'Salad'],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
