console.log('App.js is running!')

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

var user = {
  name: 'Jagadish',
  age: 49,
  location: 'Mountain House'
}

var userName = 'Jagadish'
var userAge = 49
var userLocation = 'Mountain House'

var templateNoObject = (
  <div>
    <h1>{userName}</h1>
    <p>{userAge}</p>
    <p>{userLocation}</p>
  </div>
)

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
