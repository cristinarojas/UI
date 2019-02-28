/*const prices = [{
  dataUsage: [0, 5],
  price: 'free tier'
},
{
  dataUsage: [6, 10],
  price: 10
},
{
  dataUsage: [11,50],
  price: 8
},
{
  dataUsage: [51, 100],
  price: 5
},
{
  dataUsage: [101, 1000],
  price: 2
},
{
  dataUsage: [1001]',
  price: 1
}];*/

const input = document.getElementById('gb');
const total = document.getElementById('total');

input.addEventListener('keyup', handleInput, false);

function handleInput(e) {
  var gB = e.target.value;

  function handleTotal(number) {
    console.log('number', number);
  }

  return handleTotal(gB);
}


/*function range(size, startAt = 1) {
    return [...Array(size).keys()].map(i => i + startAt);
}*/
