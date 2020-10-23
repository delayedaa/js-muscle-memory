/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(2017));


// Start at 2 and check to see if the number is divisible by the provided number.
// If it is, then return false.
// Otherwise, return true.