/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal ={};
animal.species = 'dog';
animal['name'] = 'Gus';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('sniff');
noises.unshift('growl');
noises[noises.length] = 'whine';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using bracket syntax, assign the noises property on animal to our new noises array.
animal['noises'] = noises;
/*Using any syntax add another noise to the noises property on animal.
 console.log animal.
*/
noises.push('scratch');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 ** use bracket notation or dot notation and the name of the key (as a string if using bracket notation)
 * 2. What are the different ways of accessing elements on arrays?
 ** use bracket notation. all elements must be strings. can access using the index number, a method like push or unshift, or use the length property
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);

var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
console.log(animals);

var cat = {
    species: 'cat',
    name: 'Dustpan',
    noises: ['meow', 'three-legged pad', 'slurp']
};

animals.push(cat);
console.log(animals);

var octopus = {
    species: 'octopus',
    name: 'Cephy',
    noises: ['shlunk', 'blech', 'moooooozle']
};

animals.push(octopus);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*a list of friends should be an array because arrays are ordered lists. They hold lots of the same kind of info,
like a while list of books or a list of car models or etc. We could use an object too, but it wouldn't work as well because
objects are primarily for holding lots of pieces of info about the same thing, like the table of contents of a book.
*/
var friends = [];
//Write a function called getRandom that takes our animals array and returns the index of a random element using Math.random
function getRandom(array) {
    return Math.floor(Math.random() * (array.length));
};
/* .5 * (4-0 + 1) + 0
Using a random index from this function that you just created, get a random animal and add its name to friends

*/
var randomFriend = animals[getRandom(animals)].name;
friends.push(randomFriend);
console.log(friends);
duck.friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
