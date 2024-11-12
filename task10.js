//  Find Common Elements Between Two Arrays
// Write a for loop to find common elements between two arrays.

const arr1 = [2, 4, 6, 8, 10];
const arr2 = [3, 6, 9, 12, 15];
let commonElements = [];

// Loop through the first array
for (let i = 0; i < arr1.length; i++) {
 if (arr2.includes(arr1[i])) {
  commonElements.push(arr1[i]); // Add to common elements if found in both arrays
 }
}

console.log("Common Elements:", commonElements);
// Expected Output: [6]
