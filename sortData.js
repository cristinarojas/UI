// Sort number array
const numbers = [1, 4, 2, 3, 5];

numbers.sort(); // [1, 2, 3, 4, 5]

numbers.sort((a,b) => {
  return b - a; // [5, 4, 3, 2, 1]
});

// Sort string string array
const data = ['cristina', 'ana', 'bebe', 'daniel'];

data.sort(); // ["ana", "bebe", "cristina", "daniel"]

// Sort array object
const posts =  [
  {
    title: 'cristina title'
  },
  {
    title: 'ana title'
  },
  {
    title: 'bebe title'
  },
  {
    title: 'daniel title'
  }
];

posts.sort((a, b) => {
  return a.title > b.title ? 1 : -1;
});

/*
const posts =  [
  {
    title: 'ana title'
  },
  {
    title: 'bebe title'
  },
  {
    title: 'critina title'
  },
  {
    title: 'daniel title'
  }
];
*/
