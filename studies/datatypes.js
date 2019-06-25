/*
* DATATYPES:

    Two classes:
    a. Primitive (simple) datatypes
        i. atomic: they don't hold other values or aggregate values, 
            and mathematical operations on them return new simple values
        ii. immutable: you can't change the meaning of 5. It is always going to be 5.
        iii. copy by value: when primitive datatypes are assigned or passed, they are copied from one variable to the next.
            E.g. when reassinging, the data is copied into the new variable, and is 'new data'(so to speak)instead of being the same data that was initially assigned.
            It's just 'new data' that is equivalent to to 'old data' that's in the first variable.
            Performing an operation on a primitive returns a new primitive, not the same primitive in a different state.
*/
 var copyBy = 1;
 var value = copyBy; // this makes a copy of copyBy and assigns that to value
 console.log(value); // returns '1'
 value = 'simplest'; // does not change the value of copyBy
 console.log(copyBy); // still returns '1'
/*
    b. Complex datatypes
        i. aggregate and hold other values and therefore have indefinite size.
        ii. copy by reference: these can be too big for variables (which have max capacity of 8 bytes) to hold, 
            so the variable doesn't contain the data itself. Instead, it contains a reference which points to
            to the data. So when a complex datatype is assigned or passed, if it's changed in the 
            future, the change is to the reference, not the data itself. Unlike copy by value, which changes the data
            by creating new data that is equivalent to the old data, copy by reference actually changes the data by changing
            the reference to the data. Therefore, the change will affect all representations of that data.
*/
var array = ['copy', 'by'];
var arrayTwo = array; // the value stored in arrayTwo is a reference to the value stored in array; not a new value.
arrayTwo.push('reference'); // this changes both array and arrayTwo since they're both just references to the same data.
console.log(array); // prints an array with 'reference' included as well

/*  0. NUMBER
*       a. Any numerical value: positive, negative, or floats
*/
 11;
 173;
 
//      b. Like with regular numbers, can perform mathematical functions on numbers

 11 + 14;
 3 * 3;
    
//      c. New values are created with arithmetic expressions.

var num = 1;
var numNew = num + 3; 
console.log(numNew) // returns a new primitive datatype var with value '4'

//      d. Primitive datatype

/*  1. STRING
*       a. a collection of characters/symbols surrounded by quotes ' ' or " "
*/
var string = 'This is a string.'

//      b. are zero indexed and can access individual elements of a string using bracket notation.

console.log(string[2]); // prints 'i'
console.log(string[0]); // prints 'T'

/*      c. are immutable once created
*           string[0] = 't' // will not work
*
*       e. have a .length propery that counts the number of characters in the string
*/
var stringTwo = 'Carin';
console.log(stringTwo.length); // prints '5'

//       access the last element of a string by using [.length -1]

console.log(stringTwo[stringTwo.length-1]); // prints 'n'

//      f. primitive datatype


/*  2. BOOLEAN
*       a. True or false values
*       b. Like on/off switches: turns on if value true, turns off if value is false.
*          Can use comarison operators to creat Boolean expressions.
*/
console.log(2 > 1);  //printss 'true'

//      c. Usually used in conditional statements

if (2 > 1) {
    return true;
}
/*      d. primitive datatype
*
*   3. ARRAY
*       a.  a collection used to group data together in a meaningful way; ordered lists that 
*           are usually used to hold things of the same type, like a list of book titles.
*           Created by using brackets [ ]; Can store any value type, including complex datatypes, like
*           other arrays or objects. Can store a variety of different types of data.

*       b.  use bracket notation to access elements of array. Also, mutable using bracket notation 
*           and the index of the element to access or change.
*/
var changingArray = [1, 2];
console.log(changingArray[0]); // prints '1'
changingArray[0] = 3; 
console.log(changingArray) // now prints [3, 2]

//       c.  can nest arrays and access individuals elements using bracket notation
        
var nestedArray = ['tweet', ['little', 'bird'], 'nest'];
console.log(nestedArray[1][0]); // prints 'little'

/*        d.  have many methods
*           i. .push() : adds an element onto the end of an existing array. 
*/
let arrMethods = [1, 2, 3];
arrMethods.push(4); 
console.log(arrMethods)//prints [1, 2, 3, 4]

//          ii. .shift() : removes the first element from an array and returns that element.

arrMethods.shift();
console.log(arrMethods); // prints [2, 3, 4]

/*            iii. .join() : concatenates all the elements of an array and returns a string. 
*                   Takes an optional parameter that is the seperator. If no seperator is given, adds commas between elements.   
*/
console.log(arrMethods.join()); // prints "2,3,4"
console.log(arrMethods.join('')); // prints '234'

//        e. have properties like .length which returns the number of elements in the array.

console.log(changingArray.length); // prints '2'

//        f. As with strings, can access the last element of an array using [.length-1]

console.log(changingArray[changingArray.length-1]); // returns 2

//        g. Complex datatype

/* 4. OBJECT
*    a.  collections of key/value pairs/properties. Created using curly braces {}, with syntax inside of: key: value, 
*        Group data together based on association between the key and value, instead of using order as arrays do.
*        Usually used to store information all about one thing: e.g. instead of storing titles of books, might store
*        one book's title, the author's name, the copyright info, the chapter titles, and so forth.
*        Essentially associative arrays. Can contain different data types and any type of value, simple or complex data.
*/
var myDog = {
    name: 'Gus',
    breed: 'boozehound',
    enemies: 'all non-human creatures'
};

/*    b. To access or manipulate elements of an object, we use the keys. Keys are always strings.
*        Two ways to access and/or add properties:
*           i. bracket notation, with the key as a string
*/           
console.log(myDog['breed']); // prints 'boozehound'
myDog['currently'] = 'barking'; // adds key/value pair of currently: 'barking' to the object
console.log(myDog); //shows new key/value pair of 'currently: barking'

//          ii. dot notation, usually preferable to use, must be used if the property holds a function
            
console.log(myDog.enemies); // returns 'all non-human creatures'
myDog.later = 'nuzzling'; // adds key/value pair of 'later: nuzzling'
console.log(myDog); // shows new key/value pair of 'later: nuzzling'
    
/*   5. FUNCTION
*       Encapuslated blocks of code that we can run repeatedly. Allows us to avoid repeating ourselves.
*       Syntax is:
*   function name(){
*    //some code here;
*}
*         Must first declare a function and then call it.
*         Parameters are inputs. Use return to get output.
*         Functions may be named or anonymous. Usually anonymous functions are functions being passed to other functions.
*         
*    6. UNDEFINED
*       Means something exists, but has no value. It is uninitialized, as in a variable that has been declared but not initialized.
*
*    7. NULL
*       Is an absence of value. Used intentionally by a programmer.
*    
*    8. NaN
*       A numeral type which stands for "not a number."
*
*    9. INFINITY and -INFINITY
*       Infinity is a numerical value and property on the global object that represents infinity.
*/
