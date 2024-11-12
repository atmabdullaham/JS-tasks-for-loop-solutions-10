// ________________________3. Sum of Digits___________________________________________

// Write a for loop to calculate the sum of all digits of a given number.

const num = 10515;
let sum = 0;
for (let i = 0; i < num.toString().length; i++) {
 sum += parseInt(num.toString()[i]);
 console.log(parseInt(num.toString()[i]))
}

console.log(sum);