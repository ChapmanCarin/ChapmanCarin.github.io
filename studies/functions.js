/*The two phases to using functions: 
*
*First we must create a function, giving it a name, optional parameters, and a code block.
*/
function namedFunction() {
    //some code here
}

//Next we can execute (or call or invoke) the function by using its name

namedFunction();

/* A function’s parameters are the optional placeholders used inside the () after the function name.
*   They're like car seats: empty containers waiting for meaningful values (the people who will sit in the seats) to be passed into them.
*   The arguments are the values we pass into them (the people), which we pass to it when we call the function.
*/
function addFunction(num1, num2) { //num1 and num2 in this line are the paremeters
    return num1 + num2;
}

console.log(addFunction(1, 3)); // calls the function and then prints '4'; 1 and 3 are the arguments

//What’s the syntax for a NAMED function?
//keyword function, followed by the function's name (if it has one), parentheses with optional parameters, curly braces
function nameHere() {
    //some code here
}

//How do we assign a function to a variable?
//Use var, let, or const and assign that to the function

let simpleMath = function subtract(num1, num2) {
    return num2 - num1;
};

/*Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
* inputs are specified as parameters inside the parentheses.
* outputs are specified with a return statement. 
*
* Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
* This is true because functions are in their own child scope and things in child scope have access to parent scope, but not vice versa.
* See "SCOPE" under 'Variables' for more.
*
* Closures: Functions form closures around the data they house. 
* If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
* Closures are created when a function has access to the parent scope, even after the parent scope has closed,
* and the function uses variables from the parent scope.
* Closures are used to maintain access to values by enclosing them in a function.
* The enclosing function forms a closure around the enviroment in which it was defined.
*/
function outerFunc() {
    let a = 1;
    return function gimmeTwo() {
        return a += 1;
    };
  }
console.log(outerFunc()()); //prints '2'

