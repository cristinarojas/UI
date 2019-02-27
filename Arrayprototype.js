// // How to extend Array prototype to find duplicate elements in an array?
// const myElements = [23, 4, 5, 5, 6, 7];
//
// Array.prototype.findElement = function(element) {
//   var index = this.indexOf(element);
//
//   if (index != -1) {
//     console.log('found!');
//   } else {
//     console.log('Not found!');
//   }
//
//
// }
//
// myElements.findElement(12);

// repetidos
const myElements = [23, 4, 5, 5, 6, 7];

Array.prototype.findElement = function() {
  var duplicates = this.reduce((acc, current, index, arr) => {
    if (arr.indexOf(current) !== index && acc.indexOf(current) < 0) {
      acc.push(current);
    }

    return acc;
  }, []);
  console.log('RESULT===', duplicates);
  return duplicates;
}

myElements.findElement();
