const counter = document.getElementById('counter');
const result = document.getElementById('result');

counter.addEventListener('click', function() {
  result.innerHTML = myFunc();
}, false);

var myFunc = counterHandler();

function counterHandler() {
  let count = 0;

  function increment() {
    return count ++;
  }

  return increment;
}
