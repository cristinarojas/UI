// Difference between undefined and null

/* undefined when a variable is declared but we do not assign a value */
var result;

console.log(result); // undefined
console.log(typeof(result)); // type undefined

/* null is a value that could be asigned a variable */
var myData = null; // is a representation of not value

console.log(myData)
console.log(typeof(myData)); // type object

// Example: how can we use null to validate not value in a input
const myInput = document.getElementById('myInput');

if(myInput.value === '') {
  console.log('not value-->', myInput.value);
} else {
  console.log('yes value-->', myInput.value);
}
