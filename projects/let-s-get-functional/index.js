// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-chapmancarin');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
               return _.filter(array, function(customer){
               return customer.gender === 'male';
                }).length;
};

var femaleCount = function(array){
    /*- 
    **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
 */
return _.reduce(array, function(acc, customer){
     if(customer.gender === 'female'){
        acc++;
     }
     return acc;
 },0);
};

var oldestCustomer = function(array){
/*
- **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */
 
 /*
 let counter = 0;
 let result = '';
_.each(array, function(customer, i, a){
  if(customer.age > counter){
    counter = customer.age;
  }
  if(counter === customer.age){
   result = customer.name;
  }
});
  //console.log(result);
  return result;
};
*/
 let customerObject = _.reduce(array, function(customer, currentCustomer, i, a){
     if(customer.age < currentCustomer.age){
         customer = currentCustomer;
     }
    return customer;
 });
 return customerObject.name;
};


var youngestCustomer = function(array){
 let youngestObject = _.reduce(array, function(customer, currentCustomer){
    if(customer.age > currentCustomer.age){
     customer = currentCustomer;
    }
    //console.log(customer);
    return customer;
 });
 return youngestObject.name;
};
/*
- **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 */
var averageBalance = function(array){

/*
- **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:
 */
 let totalBalance = 0;
let averageBalance = 0;
_.map(array, function(customer, i, a) {
     let noDollarSignBalance = customer.balance.replace(/\$/,'');
     let accurateBalance = noDollarSignBalance.replace(/\,/,'');
     console.log(typeof accurateBalance, 105);
     let balanceForThisShit = parseFloat(accurateBalance);
    totalBalance += balanceForThisShit;
    averageBalance = totalBalance / array.length;
    });
    return averageBalance;
};

var firstLetterCount = function(array, letter){
/*
- **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */
 
 
 return _.filter(array, customer => customer.name[0].toUpperCase() === letter.toUpperCase()).length;
};

/*
 return _.reduce(array, function(acc, currentValue){
     if(currentValue.name[0] === letter.toUpperCase()){
         acc++;
     }
     return acc;
 });
};
*/

var friendFirstLetterCount = function(array, customer, letter){
/*
- **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**: 
 */
 let wantedCustomer = _.filter(array, patron => patron.name === customer);
 let friendsArray = _.pluck(wantedCustomer, "friends")[0];
 console.log(friendsArray, 144);
 return _.filter(friendsArray, pal => pal.name[0] === letter.toUpperCase()).length;
};

var friendsCount = function(array, name){
/*
- **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:
*/
 //let maybeCustomers = _.filter(array, customer => customer.friends.filter(friend => friend.name === name));
return _.reduce(array, function(arr, customer){
   if(_.some(customer.friends, friend => friend.name === name)){
   arr.push(customer.name);
   }
   return arr;
}, []);
};
/*
return _.reduce(array, (namesList, customer) => {
        _.each(customer.friends, function(friend){
            if(friend.name === name) {
            namesList.push(customer.name);
        }});
   // console.log(namesList);
    return namesList;
}, []);

let customers = _.filter(array, customer => customer.friends[0].name === name);
let customersNames = _.map(customers, customer => customer.name);
console.log(customersNames);
};
*/

var topThreeTags = function(array){
/*
- **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:
 */
 let tagsString = _.map(array, customer => customer.tags).join();
 let tagsArray = tagsString.split(',');
  let tagsObject =  _.reduce(tagsArray, function(acc, currentTag){
    if(acc[currentTag]){
      acc[currentTag]++;
    } else{
      acc[currentTag] = 1;
    }
    return acc;
  },{});
 let sortable = [];
 for(let key in tagsObject){
  sortable.push([key, tagsObject[key]]);
 }
  console.log(sortable, 189);
  let result = sortable.sort((a, b) => b[1] - a[1]);
  let topThree = result.slice(0, 3);
let finalResult = [];
finalResult.push(topThree[0][0], topThree[1][0], topThree[2][0]);
return finalResult;
 };
 
var genderCount = function(array){
/*
- **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    transgender: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`
 */
 return _.reduce(array, function(obj, currentCustomer){
  if(obj[currentCustomer.gender]){
   obj[currentCustomer.gender]++;
  } else {
   obj[currentCustomer.gender] = 1;
  }
  return obj;
 }, {});
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
