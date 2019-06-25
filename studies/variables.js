/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
var a;
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// a. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// b. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// c. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 4. function-scoped 
*    a. If a variable is created inside of a function, it only exists inside that function.
*     So any attempt to console.log that variable outside the function will throw a ReferecneError: is not defined.
*/
function scopeTest(){
  var testThis = 1;
}
//console.log(testThis); //throws ReferenceError: is not defined because the var testThis does  not exist outside the function.

/*    b. function scoped also means that if a variable is reassigned inside a function, even after that function is called, 
*       the inital value for the variable will take precedence in scope,
*       such as below where console.log(x); will still return '1', even though scopeOut() will print '2'.
*/

var x = 1;
function scopeOut() {
    var x = 2;
  console.log(x);
}
console.log(scopeOut());
console.log(x);

//    c. the variable declaration is available throughout the function, 
//      not just in the code block where it's created.

function dogAge() {
  var gus = 6;
  if (gus === 6) {
    console.log(gus);
  }
}
console.log(dogAge()); // returns '6' because variable gus is available throughout function, 
//not pinned to the code block of creation.

/* LET
*   a. let is another keyword used for making variables. 
*   It was introduced, along with const, in 2015 to correct problems with the var keyword/variable.
*   b. let is mutable, like var.
*/
let thisVariable = 1;
thisVariable = 2;
console.log(thisVariable); // prints 2;

/*    c. let is block scoped
*       Block scoped means the variables are pinned to the block of code in which they are written,
*       so registered as existing only inside the code block they're created in.
*       If they're in functions, loops, or if statements, they only exisit inside those chunks of code.
*/
let carin = 'testy';
if (carin === 'testy') {
  let day = 'bad day';
}
//console.log(day); //returns ReferenceError: day is not defined 
//because the variable 'day' is pinned to the if statement it was created in.

/*    d. let can be used in global scope, like var; it just don't become a property of the window object, like var does. 
*     This is better because it avoids conflicts between variables with the same names.
*/

/* CONST
*    a. another keyword used for making data containers. Not technically a "variable" because it's a constant and can't vary.
*/
const name = 'Carin';

//    b. is immutable, and thus cannot be reassigned.

//name = 'Gus'; // makes no change to 'name' because const is immutable.

/*    c. must be declared and initialized at the same time 
*       because it cannot changed after being created and being created with no value
*       --and no ability to reassign--would be akin to creating an empty and useless variable.
*      
*     d. block scoped (see explanation of 'block scoped' under LET above)
*      
*     e. const can be used in global scope, like var; it just doesn't become a property of the window object, like var does. 
*       This is better because it avoids conflicts between variables with the same names.


/* HOISTING
*   Hoisting means that every var and every named-function declaration (DECLARATION NOT INITIALIZATION!!) 
*   is dragged to the top of the program before the statements in the program are run. 
*   This is akin to the program running a 'sweep' before executing actions of the program, 
*   and in the sweep, picking up all variable declarations and named-functions, 
*   plopping them at the top of the program, and then executing everything in the program. 
*   Only the declaration of variables are hoisted, but the full function--its name and value--
*   are hoisted to the global scope and so available anywhere in the window object.
*   
*   let and const are technically hoisted but are not available until they are declared
*   and initialized, so calling them will throw a Reference Error if it's before they are declared. 
*   Var, though, will just throw an Undefined error if referenced before assignment
*   because the variable exists in global scope as soon as it's declared, 
*   but it hasn't been initialized until the program gets to the line where it's initialized.
*/

/* SCOPE
*   Scope is the way JavaScript defines different spaces or areas or contexts within a program.
*   The window object is the global scope, and things that are created/exist in the global scope, 
*   like variables using keyword var created outside of functions, 
*   are said to exist in the global scope and to be in the "parent scope" of elements that are created "under" them, like functions, which are in the "child scope."
*
*   Scope determines things such as in what context/space a variable is defined or exists. It specifies where you can/can't acces a variable and 
*   if you have access to a variable in a given space/context or not.  For example, any assignment that is made without a keyword (e.g.does not use var, let, or const)
*   is automatically pinned to the global scope (and these are in fact created in the window object itself, which is what makes this bad practice-- see LET.d for more).
*   Scope is like a series of nested boxes going from the outermost, global (with loops inside global but in their own scope), 
*   then functions inside global with their own local scope, and if statements inside the local scope of functions but inside their own local.
*   Local scope is confined to functions for var variables and to specific blocks of code for let and const. This means if a var variable
*   is defined inside a function, the variable does not exist in the global scope. The var variable is pinned to the function in which it's created,
*   though it is hoisted to the top of that function. 
*   let and const are specifically pinned to the scope of the block of code in which they're created if they're inside a function, if statement, loop, or etc.
*   Everything in the parent scope is accessible anywhere in the child scopes, but the things in the child scopes are not available to the parent scope.
*/
