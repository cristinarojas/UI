// o Write a function using
// map function to return only even
// numbers of an unsorted array.

const numbers = [1, 4, 3, 2, 5, 6, 9, 8]; // even [4, 2, 6, 8]

const result = numbers.map((number)=> {
  if (number % 2 === 0) { // [undefined, 4, undefined, 2, undefined, 6, undefined, 8]
    return number;
  }
}).filter((number) => number); // [4, 2, 6, 8]


console.log(result);
