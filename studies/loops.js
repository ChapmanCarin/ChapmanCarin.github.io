/* LOOPS
*
* Loops allow us to repeat code multiple times in a row and/or to iterate over arrays and objects, 
* pulling out each of their values and then doing something with their values.
*   
* 0. While loops
* While loops run while some condition is true. They take only one step to define, which is to give
* the loop a condition that is a Boolean expression in parentheses, followed by curly braces 
* and, inside the curly braces, code to execute over and over for as long as the condition is true. 
* The loop checks to see if the condition is true each time before it runs. 
* If the condition is true, the loop continues. If it is false, the loop breaks and stops.
*/
let year = 2009;
while(year < 2019) {
  year++;
  console.log(year); // prints 2010 through 2019
}
/*
* It is very important to give while loops a stop condition. Failure to do so will result in an infinite loop,
* which will crash the program. In the example above, the stop condition is when year is 2019.
*
* While loops can also count backwards of course.
*/
while(year > 1981) {
  year--;
  console.log(year); // prints 2019 through 1981
} 
/*
*
* 1. For loops
*   i. For loops can be used to repeat code multiple times. They take three steps to define which are:
*   telling the loop where to start, how long to loop for, and what to do each time it loops. The start 
*   statement creates and sets the starting value of the counting variable, i. 
*   The stop statment tells the loop when to stop, using a Boolean expression. 
*   If the boolean resolves to 'true,' the loop will keep going.
*   When it resolves to 'false,' the loop will stop. 
*   The final statement tells the program what to do with each loop.
*   The syntax is keyword 'for' followed by the three defining steps, with semicolons in between them, 
*   and the whole thing wrapped in parentheses, then curly braces with the code to run inside the curly braces.
*/
for (let i = 0; i < 10; i++) {
  console.log(i);
} //prints the numbers 0-9 then stops

//    For loops can also be used to decrement.
for (let i = 10; i > -1; i--) {
  console.log(i);
} //prints the numbers 10-0 then stops.
/*
*   ii. For loops can also be used to iterate over arrays, pull out the values at each index, and do something with them.
*       The syntax is essentially the same except that the loop will need to reference the array it is iterating over.
*/
let forLoopArray = [1, 2, 3];
for (let i = 0; i < forLoopArray.length; i++) {
      console.log(forLoopArray[i]);
}// prints '1, 2, 3'
/*
*       For loops can also iterate backwards over arrays:
*/
for (let i = forLoopArray.length-1; i > -1; i--){
      console.log(forLoopArray[i])
} // prints '3, 2, 1'

/*  2. For-in loops
*    For-in loops are used to iterate over objects, pull out all their keys, and use those keys either to access the 
*    values associated with them, to access and do something with those values, or to find out what the keys themselves are.
*/
let objectForLoop = {
  myDog: 'Gus',
  legs: 4,
  favoriteThing: 'running in the woods'
};

for (let key in objectForLoop) {
  console.log(objectForLoop[key]);
}   // prints 'Gus', '4', 'running in the woods'

for (let key in objectForLoop) {
  console.log(key);
} // prints 'myDog', 'legs', 'favoriteThing'
