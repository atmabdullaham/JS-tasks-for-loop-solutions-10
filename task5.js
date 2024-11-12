// 5. _________________Find Minimum and Maximum in an Array_________________________

// Write a for loop to find both the minimum and maximum numbers in a given array.

const nums = [10, 45, 2, 33, 50, 18];
let min = nums[0];
let max = nums[0];

// Loop through the array
for (let i = 1; i < nums.length; i++) {
 if (nums[i] < min) min = nums[i]; // Update min if current number is smaller
 if (nums[i] > max) max = nums[i]; // Update max if current number is larger
}

console.log("Minimum:", min); // Expected: 2
console.log("Maximum:", max); // Expected: 50
