
class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting () {
    return `${this.name} is ${this.age} Years old`
  }

  getWishes () {
    return `My name is ${this.name}`
  }
}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor () {
    return !!this.major
  }

  getGreeting () {
    let description = super.getGreeting()
    if (this.hasMajor()) {
      description += `and their major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor (name, age, location) {
    super(name, age)
    this.location = location
  }

  hasLocation () {
    return !!this.location
  }

  getWishes () {
    let wishes = super.getWishes()
    if (this.hasLocation()) {
      wishes += ` And location is ${this.location}`
    }
    return wishes
  }
}

const me = new Student('Channagiri Jagadish', '39', 'Computer Science')
console.log(me)
console.log(me.hasMajor())
console.log(me.getGreeting())

const other = new Student()
console.log(other)
console.log(other.hasMajor())
console.log(other.getGreeting())

const tr = new Traveler('Channagiri Jagadish', 39, 'California')
console.log(tr.getWishes())

const tro = new Traveler()
console.log(tro.getWishes())
