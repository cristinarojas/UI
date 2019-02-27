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

/*
  the inner function preserves the scope chain of
  the enclosing function at the time the enclosing
  function was executed,
  and thus can access the enclosing function’s variables.
*/
