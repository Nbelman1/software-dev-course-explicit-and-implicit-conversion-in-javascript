/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

const { use } = require("react");



// ----- PART 1 -----

let result = Number("5") - 2;
console.log("The result is: " + result); 
// The original code ran, but could create errors if using addition.
// Typecasting 5 to a number ensures viability across different operation types.

let isValid = false; 
if (isValid) {
    console.log("This is valid!");
}
// Typecasting "false" to a boolean results in true. Since false is already a 
// boolean value, removing the typecasting removes ambiguity and creates 
// working code. 

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
// When addition is used with a string, it's concatenated instead of added. 
// Typecasting the string to a number causes the plus sign to add instead of concatenate. 



// ----- PART 2 -----

// Using implicit type conversion allows us to take advantage of string concatenation
let numOfHundreds = "5";
let numOfTens = "2";
let numOfOnes = 7;
let grandTotal = numOfHundreds + numOfTens + numOfOnes;
console.log(grandTotal);


// Example of explicitly casting undefined to a Boolean
let userName = undefined;
let userNameValid = Boolean(userName);
console.log("userName's value is: " + userName);
console.log("userName is this type of variable: " + typeof(userNameValid));
