// arguments object
// this keyword  not bound

const add = (a, b) => {
  // console.log(arguments)
  return a * b
}
console.log(add(55, 1, 1001))

// this will not work for nested functions
// cannot access this in the function this.cities.foreach
const user = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(function (city) {
      console.log(this.name + 'has lived in' + city)
    })
  }
}
// user.printPlacesLived()
// the above function will fail and the fix is below

// work around for nested function
const user1 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)
    const that = this

    this.cities.forEach(function (city) {
      console.log(that.name + 'has lived in ' + city)
    })
  }
}
user1.printPlacesLived()

// work around for nested function
// using arrow function
// more elegant and this can be referenced within foreach
const user2 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach((city) => {
      console.log(this.name + 'has lived in ' + city)
    })
  }
}
user2.printPlacesLived()

// in the arrow function below
// this is not bound to printplaceslived
// for it is an arrow function
// whereas es5 function abaove will work

const user3 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived: () => {
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach((city) => {
      console.log(this.name + 'has lived in ' + city)
    })
  }
}
// user3.printPlacesLived()
// the above call will not work

// the above issue can be fixed es6
// method definition function as below

const user4 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived () {
    console.log(this.name)
    console.log(this.cities)
    this.cities.forEach((city) => {
      console.log(this.name + 'has lived in ' + city)
    })
  }
}
user4.printPlacesLived()

// map method
const user5 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived () {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city + '!'
    })
    return cityMessages
  }
}
console.log(user5.printPlacesLived())

// map method - further modification
const user6 = {
  name: 'jagadish',
  cities: ['San Francsico', 'Los Angeles', 'Irvine'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in' + city)
  }
}
console.log(user6.printPlacesLived())

// multiplier function
const multiplier = {
  numbers: [1, 34, 45, 89, 90],
  multiplyBy: 8,
  multiply () {
    return this.numbers.map((num) => this.multiplyBy * num)
  }
}

console.log(multiplier.multiply())
