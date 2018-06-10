'use strict';

var square = function square(x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//  return x * x
// }

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(5));

var fullName = 'Channagiri Jagadish';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

var getFirstName1 = function getFirstName1(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName1('Albert Einstein'));

var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName2('Richard Feynman'));
