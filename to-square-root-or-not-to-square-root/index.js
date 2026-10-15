// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    const square = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const sqrt = Math.sqrt(element)

    if (Number.isInteger(sqrt)) {
        square.push(sqrt)
    } else{
        square.push(Math.pow(element, 2));
    }  
  }
  console.log(square)
}
squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]);
// input = [ 1, 2, 3, 4, 5, 6 ];