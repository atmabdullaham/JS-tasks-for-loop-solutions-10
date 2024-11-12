// 9. Reverse an Array(without using reverse method)
// Write a for loop to reverse the elements of an array.


const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

// Loop through the original array from the end to the beginning
for (let i = originalArray.length - 1; i >= 0; i--) {
 reversedArray.push(originalArray[i]);
}

console.log("Reversed Array:", reversedArray);
// Expected Output: [5, 4, 3, 2, 1]
