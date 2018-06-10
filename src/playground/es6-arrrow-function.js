const square = function (x) {
  return x * x
}

console.log(square(3))

// const squareArrow = (x) => {
//  return x * x
// }

const squareArrow = (x) => x * x

console.log(squareArrow(5))

const fullName = 'Channagiri Jagadish'
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

const getFirstName1 = (fullName) => {
  return fullName.split(' ')[0]
}

console.log(getFirstName1('Albert Einstein'))

const getFirstName2 = (fullName) => fullName.split(' ')[0]

console.log(getFirstName2('Richard Feynman'))