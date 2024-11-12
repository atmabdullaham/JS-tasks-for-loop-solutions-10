// 8. Calculate Average of an Array
// Write a for loop to calculate the average value of all elements in an array.

const values = [10, 15, 20, 25, 30];
let total = 0;

// Loop to sum up all elements
for (let i = 0; i < values.length; i++) {
 total += values[i];
}

const average = total / values.length;
console.log("Average value:", average);
// Expected Output: 20
