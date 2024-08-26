// ! Variables
//* Keywords
//  var: Older syntax. The vaule within it can be changed
//  let: similar to var but provides more "control". the value within it can be changed
//  const: released with "let" but maintains the value it hold as a "constant"
//  (nothing): considered a "global variable" and functions the same as "var"

// * Syntax
let a =2;

    let     b   =   1;
//  1       2   3   4

/*
    1. JavaScript keyword to denote the creation of a variable
    2. The name of the variable
    3. Assignment operator
    4. initial value
*/

// * Variable Declaration
let x;
console.log('Declaration: ', x);

// * Variable Initialization
let y = 10; 

x = 20;
console.log('Initialization: ', x);
x = 30;
console.log('Initialization: ', x);


// * Assign to other variables
let first = "John";
let last = "Smith";

let full = first + ' ' + last;

// ! The Console
let name="Kayla Horton";
console.log('log ', name);

let warn="Uh oh";
console.warn(warn);

let err="This looks bad!";
console.error(err);