// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4



// function findAverage(nums) {
//     let add = 0;
//     let mean = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     add += element
//     mean = add / nums.length;
//   }
//   return mean
// }

function findAverage(nums) {
    let add = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    add += element
  }
  return add/nums.length
}

// findAverage([1]);
findAverage([1, 3, 5, 7])