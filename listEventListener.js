const parentElement = document.getElementById('parent');

parentElement.addEventListener('click', function(e) {
  console.log(e.target.id);
}, false);
