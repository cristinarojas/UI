// 121

function palindrome(num) {
  if ( num === 1 || num === 0 ) {
    return true
  }

  for (var i = 0; i <= num.length; i++) {
    if (num %  === 0 || num % === 1 ) {
      return true
    } else {
      return false
    }
  }
}

// Palindrome function
function isPalindromeNumber(number) {
	// No palindrome if is 1 or 0
	if (number === 1 || number === 0) return false;

	// No palindrome if is negative number
	if (number < 0) return false;

	var value = 1;

	while (number/value > 10) {
		value = value * 10;
	}

	while (number > 0) {
		if(Math.floor(number/value) === number % 10) {
			number = Math.floor((number%value)/10);
			value = Math.floor(value/100);
		} else return false;
	}

	return true;
}

isPalindromeNumber(121);

// Palindrome number function
function palindrome(number) {
  console.log('string', number.toString());
  console.log('number', number);

  const numberFormat = number.split('').reverse().join().replace(/[.,?:;\/()_-]/g, '');

  if (number === numberFormat) {
    return true;
  } else {
    return false;
  }
}

palindrome(121);

// React component
import React from 'react';

class inputComponent extends Component {
  render() {
    return (
      <>
        <form>
          <label>Insert name:</label>
          <input type="text">
          <button type="button">Send</button>
        </form>
      </>
    );
  }
}
export default inputComponent;
