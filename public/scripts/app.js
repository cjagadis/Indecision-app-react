'use strict';

// arguments object
// this keyword  not bound

var add = function add(a, b) {
  // console.log(arguments)
  return a * b;
};
console.log(add(55, 1, 1001));

// this will not work for nested functions
// cannot access this in the function this.cities.foreach
var user = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city) {
      console.log(this.name + 'has lived in' + city);
    });
  }
  // user.printPlacesLived()
  // the above function will fail and the fix is below

  // work around for nested function
};var user1 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    var that = this;

    this.cities.forEach(function (city) {
      console.log(that.name + 'has lived in ' + city);
    });
  }
};
user1.printPlacesLived();

// work around for nested function
// using arrow function
// more elegant and this can be referenced within foreach
var user2 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(_this.name + 'has lived in ' + city);
    });
  }
};
user2.printPlacesLived();

// in the arrow function below
// this is not bound to printplaceslived
// for it is an arrow function
// whereas es5 function abaove will work

var user3 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    console.log(undefined.name);
    console.log(undefined.cities);
    undefined.cities.forEach(function (city) {
      console.log(undefined.name + 'has lived in ' + city);
    });
  }
  // user3.printPlacesLived()
  // the above call will not work

  // the above issue can be fixed es6
  // method definition function as below

};var user4 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    var _this2 = this;

    console.log(this.name);
    console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(_this2.name + 'has lived in ' + city);
    });
  }
};
user4.printPlacesLived();

// map method
var user5 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    var _this3 = this;

    var cityMessages = this.cities.map(function (city) {
      return _this3.name + ' has lived in ' + city + '!';
    });
    return cityMessages;
  }
};
console.log(user5.printPlacesLived());

// map method - further modification
var user6 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function printPlacesLived() {
    var _this4 = this;

    return this.cities.map(function (city) {
      return _this4.name + ' has lived in' + city;
    });
  }
};
console.log(user6.printPlacesLived());

// multiplier function
var multiplier = {
  numbers: [1, 34, 45, 89, 90],
  multiplyBy: 8,
  multiply: function multiply() {
    var _this5 = this;

    return this.numbers.map(function (num) {
      return _this5.multiplyBy * num;
    });
  }
};

console.log(multiplier.multiply());
