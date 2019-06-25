/* OPERATORS
*
*   0. Assignment operators 
*   =, +=, -=
*   Assignment operators are used to assign or reassign values to variables.
*   With = all information on the right hand side is first resolved then it is assigned to the operand on the left of the = sign.
*/
let a = 2 + 3;
console.log(a); //prints '5'
/*
*   += and -= do the math and assingment in one step.
*/
a += 4;
console.log(a); //prints '9'
/*
*   1. Arithmetic operators
*   Used to perform mathematical operations on values.
*   +, -, *, -, %, ++. --
*/
console.log(1 + 1); //prints '2'
console.log(2 - 1); //prints '1'
console.log(2 * 2); //prints '4'
console.log(4 / 2 ); //prints '2'
console.log(10 % 5); //remainder operator, prints '0'

/*    ++ is used to increment.
*     If used before a value, it increments the value immediately.
*     If used after a value, it passes the current value to some operation and then increments the value
*/
let num = 6;
console.log(num++); // prints '6' because the increment happens only after it passes the current value
console.log('num: ' + num++); //prints 'a: 7', again, because the increment happens only after it passes the current value
console.log('num: ' + ++num); //prints 'a: 9' because the value is immediately incremented.
/*
*      -- is used to decrement, in exactly the same way as ++ is used to increment.
*/
console.log('num: ' + num--); //prints 'a: 9', because the decrement happens only after it passes the current value of 9
console.log('num: ' + --num); //prints 'a: 7', becuase the value is immediately decremented.
/*   
*   2. Comparison operators
*   >, <, >=, <=, ==, ===, !=, !==
*   Used to compare two values and return Booleans based on the resolution of the comparison.
*   == is a loose comparison while === is a strict comparison. Loose comparisons allow JS to coerce data
*   so that is is the same type, and then resolves the comparison.
*   Srtict comparison diasbles coercion of data. It should be used instead of loose comparison.
*/
console.log(2 > 1); //returns 'true'
console.log('3' == 3); //returns 'true' because JS coerces the values to the same datatype and then the comparsion is true.
console.log('3' === 3); //returns 'false' because a string of '3' does not have the same value as the number 3, as they are different datatypes.
console.log(2 !== 1); //returns true because the bang operator ! implies "not"
/*
*   3. Logical operators
*   Logical operators test the truth of values or conditions
*   && is the AND operator and tests to see if two conditions are both true
*   || is the OR operator and tests to see if either of two conditions is true
*   !! the double bang coerces a value to a Boolean. If the value was falsey (as in 0, null, undefined) it will be false, otherwise it will be true.
*/
if(2 > 1 && 3 > 2) {
  console.log('you got it');
} //prints 'you got it' because both the conditions in the if statement are true

if(2 > 1 && 3 < 2) {
  console.log('wait, what?');
} //prints nothing because the first condition is true but the second isn't

if(2 > 1 || 3 < 2) {
  console.log('you are at least half right');
} //prints 'you are at least half right' because one of the conditions is true. 
// Note that the second condition is never reached because the first was true.

if(2 < 1 || 3 < 2) {
  console.log('something is wrong');
} //prints nothing because neither condition is true

console.log(!!0); //prints 'false'
console.log(!!-1); //prints 'true'

/*  4. Unary operators (!, typeOf, -)
*     ! is the bang operator and flips the truthiness of a value, is akin to saying "not true"
*/
console.log(!true); //prints 'false'
console.log(!false); //prints 'trus'
console.log(!0); //prints 'true'

//      typeof returnr a string that tells you what datatype the value is.

console.log(typeof 1); //prints 'number'
console.log(typeof '1'); //prints 'string'

/*        typeof doesn't work with some values. 
*       Arrays return typeof 'object,' since they are technically objects.
*       null and Date also return 'object'
*       to test for a value being an array use Array.isArray()
*       to test if a value is a date use instanceof
*       to test if a value is null check if the value strictly equals === null
*/
let arr = [];
console.log(Array.isArray(arr)); //prints 'true'


//      - is a unary arithmetic operator that flips the positive or negative value of a number
let negative = 3;
console.log(-negative); //prints '-3'
/*
*    5. Ternary operator (a ? b : c)
*       Is a shortcut way of making if statements. It takes a condition and two results and returns the result that meets
*       the condition.
*/
let carin = 'exhausted';
let howCarinFeels = (carin ==='exhausted') ? 'she needs sleep' : 'how did she have enough time to sleep today?';
console.log(howCarinFeels); //prints 'get some sleep'
