/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
  let result = [];
  if (end < 0) {
    return result;
  } else {
    for (let i = 1; i <= end; i++) {
      if (i % 2 === 0) {
        continue;
      } else {
        result.push(i);
      }
    }
  }
  return result;
}

console.log(oddRange(13));
console.log(oddRange(6));


// Return an array.
// Edge case: if given a negative number, I do nothing with that number.
// Set up a for loop and start the loop at 1.
// Iterate to check if each number has a remainder of zero.
  // * We can also iterate by skipping over numbers (i.e. even numbers).