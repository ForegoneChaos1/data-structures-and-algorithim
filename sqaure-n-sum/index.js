// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

function squareSum(numbers){
    let sum = 0
    let sqaured = []
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sqaured.push(Math.pow(element, 2))
        sum += sqaured[i]
    }
    return sum
}

// squareSum([1,2])
squareSum([0, 3, 4, 5])
// squareSum([])