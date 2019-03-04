const users = [
  {
    id: 1,
    name: 'Cristina',
    lastName: 'Rojas'
  },
  {
    id: 2,
    name: 'Efrain',
    lastName: 'Rojas'
  },
  {
    id: 3,
    name: 'Nayeli',
    lastName: 'Rojas'
  },
  {
    id: 4,
    name: 'Gonzalo',
    lastName: 'Rojas'
  },
  {
    id: 5,
    name: 'karolina',
    lastName: 'Rojas'
  },
  {
    id: 6,
    name: 'Carlos',
    lastName: 'Santana'
  }
];

// Find by id.
// find return just the first element that match.
const foundUser= users.find((user) => {
  return user.id === 3;
});

console.log(foundUser); // { id: 3, name: 'Nayeli'}

// Find all the elements that have same last name.
const foundAll = users.filter((user) => {
  return user.lastName === 'Rojas';
});

console.log(foundAll);
/*
[ { id: 1, name: 'Cristina', lastName: 'Rojas' },
  { id: 2, name: 'Efrain', lastName: 'Rojas' },
  { id: 3, name: 'Nayeli', lastName: 'Rojas' },
  { id: 4, name: 'Gonzalo', lastName: 'Rojas' },
  { id: 5, name: 'karolina', lastName: 'Rojas' } ]
*/
