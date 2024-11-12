//___________________ 6. Calculate Exponent Without Using Math.pow()______________________

// Write a for loop to calculate the result of raising a base number to an exponent.

const base = 3;
const exponent = 4;
let result = 1;

// Loop to multiply the base by itself 'exponent' times
for (let i = 1; i <= exponent; i++) {
 result *= base;
}

console.log(`${base}^${exponent} =`, result);
// Expected Output: 81 (3^4)

