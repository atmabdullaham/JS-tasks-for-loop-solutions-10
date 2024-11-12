// ________________________2. Count Positive and Negative Numbers_________________________

// Given an array of integers, count how many are positive and how many are negative.

const num = [12, -45, 78, 98, -89, -7]
let positiveCounter = 0;
let negativeCounter = 0;

for (let i = 0; i <= num.length; i++) {
 if (num[i] > 0) {
  positiveCounter++;
 } else if (num[i] < 0) {
  negativeCounter++;
 }
}
console.log(positiveCounter);
console.log(negativeCounter);