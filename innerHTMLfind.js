// How to bind event listeners and finding inner HTML
// of a document element?

var myHtml = '<button type="button" class="settings">click</button>';
var frame = document.getElementById('frame');
frame.innerHTML = myHtml;

var settings = frame.getElementsByClassName('settings')[0];

// depends on the browser, some IE versions use attachEvent()
settings.addEventListener('click', function(event) {
  console.log('entra')
}, false);
