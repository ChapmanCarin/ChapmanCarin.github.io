/*
* CONTROL FLOW:
*
*   0. We can control the flow of our program by using conditional statements.
*   Conditional statements are comparisons between values that resolve to Booleans.
*   If the conditional value resolves to "true," the code inside the conditional statement executes.
*   If the conditional value resolves to "false," the code does not execute.
*   In thIS way, we can control whether a block of code is exectued in the program or not.
*    
*   1. If statements 
*    If statements are one kind of conditional statment that take a value as a condition, 
*    and execute--or don't--based on whether the conditional evaluates to true or false.
*    In the example below, if the <<condition>> is true, the code block inside the curly braces will execute. 
*    If it is not true, the code block will not execute.
*
* 
*    if (condition) {
*       some code here;
*    }
*
*  
*/
if (2 > 1) {
    console.log('yep!');
} // prints 'yep' because the conditional statment of (2 > 1) is true, so the code block of console.log('yep!') executes
    
if (2 < 1) {
    console.log('all meaning is lost.');
} // prints nothing to the console because the condition is not true,and so the code is never executed.

/*  2. Else-if
*   Else-if statements are nested under if statements as alternative possibilites to the If condition.
*   If the initial if statement does not exectue because its conditional statement does not return a Boolean of true, 
*   the interpreter will move on to any else-if statements that are chained under the if statment to see if any of them are true. 
*   Can have multiple else-if statments chained under an if statment.
*   They work the same as if statements, and execute the code block only if their condition resolves to true.
*   If the first if statement resolves to true, the code block associated with that if statment executes
*   and the else-if(s) underneath are never reached.
*/
let isCarinHungry = false;
if (isCarinHungry) {
    console.log('Go eat!');
} else if (!isCarinHungry) {
    console.log('You must have just had a snack.');
} // prints 'You must have just had a snack' because the first If condition resolves to false

/*  3. Else
*   Else statements are nested under if statements and/or else-if statments, as a final option.
*   They act as default responses for coditional statements,
*   and execute the code inside the code block if all the other previous nested options of the whole statement resolved to false.
*/
let isCarinHungryNow = 'She does not eat';
if (isCarinHungryNow === true) {
    console.log('Go eat!');
} else if (isCarinHungryNow === false) {
    console.log('You must have just had a snack.');
} else {
    console.log('Carin succumed to the robot overlords.');
} // prints 'Carin succumed to the robot overlords' because the first two conditions resolved to false.

/*
*   4. Switch
*   Switch statements are similar to if-else if statements in their end goal, but are often cleaner looking code.
*   They take a parameter and search through all the cases inside the switch statement to see which code block--if any-- is associated with that case.
*   If they find a matching case, they execute the code block under that case.
*   If they don't, a default case can be set to return something, but in the case of no default, no code is executed.
*   A break must be used to make the switch statment stop running after it finds its matching case.

*   switch(parameter) {
*    case 1:
*    //some code here;
*    break;
*    case 2:
*    //some code here;
*    break;
*    .
*    .
*    .
*    case n;
*    //some code here;
*    break;
    }
*
*/
let dog = 'Gus';
switch(dog) {
    case 'Cooper':
        console.log('Good dog, but not my dog.');
        break;
    case 'Stella':
        console.log('Old dog, and not my dog');
        break;
    case 'Dustpan':
        console.log('ummm, that is a three legged cat');
        break;
    case 'Gus':
        console.log('that\'s my girl!');
        break;
} // prints 'that's my girl'
