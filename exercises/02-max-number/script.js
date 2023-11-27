/*
  Write a function that takes two numbers as arguments
  and returns the largest of them.
*/
function findMaxNumber(num1, num2){
  //Write your code here
    if (num1 > num2){
        return num1
    }
    return num2
}

// Usage of your function
let checkMax1 = findMaxNumber(10, 5);
console.log('Max Number:',checkMax1); // -> Max Number: 10
document.write("<p>The maximum number is: " + checkMax1 + "</p>");

let checkMax2 = findMaxNumber(10, 15); // -> Max Number: 15
console.log('Max Number:',checkMax2);
document.write("<p>The maximum number is: " + checkMax2 + "</p>");

let checkMax3 = findMaxNumber(100, 100); // -> Max Number: 100
console.log('Max Number:',checkMax3);
document.write("<p>The maximum number is: " + checkMax3 + "</p>");

