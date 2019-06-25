/* 
* STRING MANIPULATION:
*
*   There are two ways to manipulate strings.
*       0. With operators
*           i.Strings can be combined/concatenated by using the + operator 
*/
let stringOperator = 'This is a string.';
console.log(stringOperator + " " + "And so is this."); // returns 'This is a string. And so is this.'

//          or can use += to concatenate

console.log(stringOperator += " This string right here is sleepy."); // returns 'This is a string. This string right here is sleepy.''

//          ii. Strings can be compared using comparison operators and their ASCII numerical values.
let stringToCompare = 'How much are you worth?';
console.log(stringOperator > stringToCompare); //returns 'true'

/*          iii. Strings are not equivalent to the same set of characters in a non-string form under strict equality (===).
*            With loose equality (==), JS will coerce the data to the same type so that it will be equivalent.
*/
console.log('3' === 3); // prints 'false'
console.log('3'== 3); // prints 'true'
console.log('3' !== 3); // prints 'true'
console.log('3' != 3); // prints 'false'

/*      1. With string methods
*           There are many methods on strings that perform a whole host of actions. Here are just a few.
*           i. .toLowerCase() and to .toUpperCase() : convert all characters in string to lower case and upper case, respectively
*/
let superString = 'so sleepy!';
console.log(superString.toUpperCase()); // prints a string of 'SO SLEEPY!', 
        
//            but note that the original string is not changed because strings are simple datatypes and copy by value, not reference.

console.log(superString); //still returns 'so sleepy!'

let myString = 'MOVING IS NOT FUN';
console.log(myString.toLowerCase()); // prints a string of 'moving is not fun'
         
/*          ii. .slice() : extracts a piece of a string, and returns that piece as a string. 
*                           Takes one mandatory parameter of the start index, which is the element where the slice should begin.
*                           Can take one opitional parameter of the stop index, which is the element where the slice should stop.
*                           If no stop parameter is given, the slice will stop at the end of the string.
*/
console.log(myString.slice(0,6)); // prints 'MOVING'
console.log(myString.slice(7)); // prints 'IS NOT FUN'

//                            Takes negative values to slice from the end of the string.

console.log(myString.slice(-3)); // prints 'FUN'                           
/*                            
*           iii. substring() : Similar to .slice, but does not take negatives.
*                               Takes one or two parameters, a start index and end index. Returns the part of the string between indexes.
*                               If only a start parameter is supplied, returns indexes through the end of the sting.
*/
var sbString = 'essay';
console.log(sbString.substring(1, 4));// returns 'ssa'
console.log(sbString.substring(1)); //returns 'ssay'

/*          iv .split() : Splits a string into an array of substrings and returns that array.
*                         Doesn't change the original string.
*                         Takes two optional parameters: a seperator and a limit.
*                         If no seperator is given (), it returns the whole string as an array.
*                         If an empty string is used as the seperator (''), each character of the string is split into a substring of its own within the array.
*                         If a seperator of a value is used, the string is split at that value every time it occurs.
*                         The second parameter, a limit, is an integer that limits how many times the string will split.
*/
console.log(myString.split(' ')); // prints ['MOVING', 'IS', 'NOT', 'FUN']
            
//          v. .concat() : combines two strings and returns them as a new, single string

let conString = 'I am done ';
let catString = 'grading essays forever.';
console.log(conString.concat(catString)); // prints 'I am done grading essays forever.'

/*          vi. .includes() : tests whether a string contains another string or not. Returns a Boolean.
*                             Takes two parameters: a mandatory searchString, which is the string to search for.
*                             And an optional position, which gives a position within the string being searched to begin the search.
*                             It is case sensitive.
*/
console.log(myString.includes('the best')); // prints'false'
console.log(myString.includes('NOT FUN')); // prints 'true'

/*          vii. .replace() : replaces some or all of a given pattern with a given replacament.
*                             Takes two parameters: the first, a pattern, can be a regular expression or a string. 
*                             This is the pattern that is searched for in the given string. 
*                             If a string is used, only the first occurence will be found/replaced, unless the global 'g' switch is used in the pattern.
*                             Use 'i' to ignore case in search
*                             The second parameter is the replacement, and it can be a string or a function.
*/
let myNeeds = 'Two coffees, two naps, two days off';
console.log(myNeeds.replace(/two/gi, 'at least three'));
let myOtherNeeds = '2 high-fives, 2 point break viewings, 2 snoballs';
function gimmeTwoMore(num){
    return (num * 2);
    }
console.log(myOtherNeeds.replace(/2/g, gimmeTwoMore)); //prints '4 high-fives, 4 point break viewings, 4 snoballs'






