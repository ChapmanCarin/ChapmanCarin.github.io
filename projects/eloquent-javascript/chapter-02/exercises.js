
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(end) {
  var i = 1;
  for (let i = "#"; i.length <= end; i += "#") {
  console.log(i);
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz //////////// ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0){
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
let string = '';
for (let i = 0; i < x; i++){
  for(let k = 0; k < x; k++) {
    if ((i + k) % 2 === 0) {
      string += ' ';
    }
     else{
      string += '#';
  }
     } 
     string += '\n';
}
console.log(string);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
