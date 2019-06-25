//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
let result = [];
for(let key in object){
    result.push(object[key]);
} return result;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//Should take an object and return all its keys in a string each separated with a space"
//return the keys from an object -- use a for in loop for this
//but return them as strings -- they already return as strings
//seperate those strings with spaces -- use .join for this?
let result = [];
for(let key in object){
    result.push(key);
} return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let result =[];
    for(let key in object){
        if(typeof object[key] === 'string'){
            result.push(object[key]);
        }
    }
    return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    } else if(typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  let capsArray = string.split(' ');
    let result = capsArray.map(element => element[0].toUpperCase() + element.slice(1));
  return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Should take an object with a name property and return 'Welcome <Name>!'"
return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);
//return `${object.name[0].toUpperCase()} ${object.name.slice(1)} is a ${object.species[0].toUpperCase()} ${object.species.slice(1)}`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take an object, if this object has a noises array return them as a string separated by a space, 
if there are no noises return 'there are no noises'", function(assert){
      assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
      assert.equal(maybeNoises({noises: []}), "there are no noises");
      assert.equal(maybeNoises({}), "there are no noises");
      */
function maybeNoises(object) {
        if(object.hasOwnProperty('noises') && object.noises.length){
            return object.noises.join(' ');
        }
        return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
      var data = "This is a super awesome string of words";
      assert.strictEqual(hasWord(data, "awesome"), true);
      assert.strictEqual(hasWord(data, "words"), true);
      assert.strictEqual(hasWord(data, "turtle"), false);
    });
    */
    
function hasWord(string, word) {
 let arr = string.split(' ');
 return arr.some(words => words === word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
      assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
      assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
      */
      
function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false);
      */
      
function isFriend(name, object) {
let values = object.friends;
//let values = Object.values(object);
//console.log(values);
if(!object.friends){
    return false;
} 
let result = values.some(element => element === name);
//console.log(result);
return result;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
        assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
        */
function nonFriends(name, array) {
    let notFriends = [];
    for(let index = 0; index < array.length; index++){
        //console.log(array[index].friends);
        if(name !== array[index].name) {
        let buds = isFriend(name, array[index]);
        console.log(buds);
        if(!buds) {
            notFriends.push(array[index].name);
        }
        }
}           return notFriends;
}
/*
let friendsArray = [];
let arrayOfNames = [];
  
for(let i = 0; i < array.length; i++) {
  if(array[i].name === name){
    friendsArray.push(array[i].friends);
  }
     var finalFriends = friendsArray.flatMap(pal => pal);
    } 
for(let index = 0; index < array.length; index++) {
    arrayOfNames.push(array[index].name);
}
  for(let index = 0; index < arrayOfNames.length; index++) {
    for(let k = 0; k < finalFriends.length; k++){
        if(finalFriends[k] === arrayOfNames[index]) {
          delete arrayOfNames[index];
}
    }
  } let noUndefineds = arrayOfNames.filter(ppl => ppl !== undefined);
  let result = noUndefineds.filter(peeps => peeps !== name);
  return result;
}



/*


function nonFriends(name, array) {
let onesFriends = [];
for(let i = 0; i < array.length; i++) {
    if(array[i].name === name){
    onesFriends.push(array[i].friends);
 var friendsArray = onesFriends[0].slice(0, 1);
    }
for(let index = 0; index < array.length; index++) {
    for(let k = 0; k < friendsArray.length; k++){
        if(friendsArray[k] === array[index].name) {
      friendsArray.splice[friendsArray[k], 1];
        }
    }
    }
    //console.log(friendsArray, 188);
}
/*

let notFriends = [];
    for(let k = 0; k < friendsArray.length; k++){
        for(let j = 0; j < allNames.length; j++){
            if(friendsArray[k] === allNames[j]){
                notFriends.push(allNames[j]);
            }
        }  console.log(notFriends, 191);
    } return notFriends;
}
*/

/*
let arrayOfNames = [];
for(let index = 0; index < array.length; index++) {
    arrayOfNames.push(array[index].name);
    //[Sara, Bob, Lizz...]
}
let result = [];
for(let i = 0; i < array.length; i++){
    for(let k = 0; k < arrayOfNames.length; k++) {
        for(let key in array[i]) {
if(array[i].friends[key] !== arrayOfNames[k]) {
    result.push(arrayOfNames[i]);
} 
}
}
}
    console.log(result);
}
*/

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    });
*/
function updateObject(object, key, value) {
    
     object[key] = value;
   return object;
   
 /*   for(let prop in object){
    if(prop === key){
        object[prop] = value;
    } else {
        object[key] = value;
    }
}
    return object;
    */
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
/*
 Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});
      */
for(let i = 0; i < array.length; i++) {
    for(let key in object) {
          if(array[i] === key) {
              delete object[key];
          }
      }   
    }
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
/*
Should take an array and return an array with all the duplicates removed", function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
      */
/*return array.filter((e, i, arr) =>
        arr.indexOf(e) === i);
}
*/
let noDuplicates = Array.from(new Set(array));
console.log(noDuplicates);
return noDuplicates;
}
/*
let result = [];
array.map(function (e, i, arr) {
    if (result.indexOf(array[i]) === -1) {
        result.push(array[i]);
    }
}); 
    return result;
}
*/

/*
list = [1, 2, 2, 3];
debugger;
list = list.filter((e, i, arr) =>
               arr.indexOf(e) === i);

console.log(list);

*/
/*the two codes below is very close but any element that is repeated is not pushed in at all.
let duplicatesRemoved = array.filter((e, i, arr) => 
arr.indexOf(e) === arr.lastIndexOf(e));
console.log(duplicatesRemoved, 321);
}


let result = [];
array.map((e, i, arr) => {
    if(arr.indexOf(e) === arr.lastIndexOf(e)) {
        result.push(array[i]);
        console.log(result, 321);
    }
});
return result;


*/
/*
let result = [];
console.log(result);
if (!array.length) {
    return result;
}

let firstElement = array.slice(0, 1); 
let nextElement = array.slice(1, 1);
if(firstElement !== nextElement) {
    result.push(firstElement);
} return dedup(array.splice(0));
}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}