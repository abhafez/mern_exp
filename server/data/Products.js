const { db } = require('../models/Products');

const products = (depId) => [
  {
    name: 'Xbox',
    price: 2000,
    department_id: depId.Gaming,
  },
  {
    name: 'PlayStation II',
    price: 3000,
    department_id: depId.Gaming,
  },
  {
    name: 'PlayStation III',
    price: 4000,
    department_id: depId.Gaming,
  },
  {
    name: 'PlayStation IV',
    price: 6000,
    department_id: depId.Gaming,
  },
  {
    name: 'WII',
    price: 4000,
    department_id: depId.Gaming,
  },
  {
    name: 'Chess',
    price: 150,
    department_id: depId.Toys,
  },
  {
    name: 'Kitten',
    price: 200,
    department_id: depId.Toys,
  },
  {
    name: 'Doll',
    price: 200,
    department_id: depId.Toys,
  },
  {
    name: 'Buzz Lightyear',
    price: 200,
    department_id: depId.Toys,
  },
  {
    name: 'Beutiful Card',
    price: 10,
    department_id: depId.Gifts,
  },
  {
    name: 'Medal',
    price: 15,
    department_id: depId.Gifts,
  },
  {
    name: 'Lighter',
    price: 50,
    department_id: depId.Gifts,
  },
  {
    name: 'Wallet',
    price: 30,
    department_id: depId.Gifts,
  },
  {
    name: 'A watch',
    price: 800,
    department_id: depId.Gifts,
  },
  {
    name: 'The Alchemist',
    price: 100,
    department_id: depId.Books,
  },
  // TODO: findout how could linter ignore my escape character and chang to double quotes
  {
    name: "You don't know Javascript",
    price: 100,
    department_id: depId.Books,
  },
  {
    name: 'Elixir getting started',
    price: 150,
    department_id: depId.Books,
  },
  {
    name: 'Ruby metaprogramming',
    price: 250,
    department_id: depId.Books,
  },
  {
    name: 'Warld War II',
    price: 250,
    department_id: depId.Books,
  },
  {
    name: 'Algorithms',
    price: 250,
    department_id: depId.Books,
  },
];

module.exports = {
  products,
};
