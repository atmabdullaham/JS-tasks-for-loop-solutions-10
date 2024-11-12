//_______________________7. Find All Palindromic Numbers in a Range_______________________

// Write a for loop to find all palindromic numbers between 10 and 200.

// Function to check if a number is a palindrome
function isPalindrome(num) {
 return num.toString() === num.toString().split('').reverse().join('');
}

for (let i = 10; i <= 200; i++) {
 if (isPalindrome(i)) {
  console.log(i); // Print palindromic numbers
 }
}

// Expected Output: 11, 22, 33, ..., 191
