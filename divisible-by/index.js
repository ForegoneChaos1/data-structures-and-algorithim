// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    const divisible = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % divisor === 0) {
            divisible.push(element);
        }
    }
    console.log(divisible)
}


// divisibleBy([1,2,3,4,5,6], 2)
// divisibleBy([1,2,3,4,5,6], 3)
// divisibleBy([0,1,2,3,4,5,6], 4)
// divisibleBy([0], 4)
// divisibleBy([1,3,5], 2)