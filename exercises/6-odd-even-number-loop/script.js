/*
  The `isOddEvenNumber(curLimit)` function in JavaScript checks if a number is odd or even from 0 up to a given limit.

  Here's a step-by-step breakdown of what the function does:

  1. It accepts one parameter, `curLimit`, which represents the upper limit of the range of numbers to check.
  2. It uses a `for` loop to iterate over each number from 0 up to `curLimit`.
  3. For each iteration, it checks if the current number (`i`) is even by using the modulus operator (`%`). If `i` is divisible by 2 with no remainder, it's an even number.
  4. It uses a ternary operator to assign the string 'EVEN' to `alertMessage` if the number is even, and 'ODD' if it's not.
  5. It then logs the current number (`i`) and its corresponding `alertMessage` to the console.
 */
function isOddEvenNumber(curLimit) {
  // your code goes here
}

// Usage example:
isOddEvenNumber(10);
isOddEvenNumber(17);