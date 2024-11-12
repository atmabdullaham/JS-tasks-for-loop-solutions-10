// _____________1. Sum of Odd Numbers______________________________

// Write a for loop to find the sum of all odd numbers between 1 and 50.

let sum = 0;
for (let i = 1; i <= 50; i++) {
 if (i % 2 !== 0) {
  sum = sum + i;
  console.log(i);
 }

}
console.log(sum);