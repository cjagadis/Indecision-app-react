console.log('App.js is running!')

const appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation',
  options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{appobject.title}</h1>
    {appobject.subtitle && <h2>{appobject.subtitle}</h2>}
    <p>{(appobject.options.length > 0) ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

const user = {
  name: 'Jagadish',
  age: 34,
  location: 'Mountain House'
}

function getlocation (location) {
  if (location) {
    return <p>location: {location}</p>
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {false}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getlocation(user.location)}
  </div>
)

// let count = 0

const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
)
// console.log(templateThree)
// const appRoot = document.getElementById('app')
// ReactDOM.render(templateThree, appRoot)

// register the function with the button
// normally this is not done
// we follow the convention in templateThree
const template4 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => {
      console.log('some value here')
    }}>+1</button>
  </div>
)
// console.log(template4)
// const appRoot = document.getElementById('app')

// ReactDOM.render(template4, appRoot)

let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}
const minusOne = () => {
  count--
  renderCounterApp()
}
const resetBt = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const template5 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetBt}>reset</button>
    </div>
  )
  ReactDOM.render(template5, appRoot)
}

renderCounterApp()
