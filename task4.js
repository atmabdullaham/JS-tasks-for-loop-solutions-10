// 4.__________________Find Duplicates in an Array________________________________

// Write a for loop to find all duplicate elements in an array.

const arr = [3, 5, 7, 3, 9, 5, 11];
let duplicates = [];

// Loop through the array
for (let i = 0; i < arr.length; i++) {
 for (let j = i + 1; j < arr.length; j++) {
  if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
   duplicates.push(arr[i]); // Add the duplicate element to the list
  }
 }
}

console.log("Duplicate elements:", duplicates);
// Expected Output: [3, 5]
