// Nullish Coalescing Operator
// const age = null;
// document.body.innerText = `Your age is ${age ?? 'Não Informado'}`;

// Objects
const user = {
  name: 'John Doe',
  age: 23,
  address: {
    city: 'New York',
    state: 'NY',
  },
};

document.body.innerText = JSON.stringify(user);
