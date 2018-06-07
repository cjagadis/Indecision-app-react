console.log('App.js is running!')

var appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation'
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{appobject.title}</h1>
    <h2>{appobject.subtitle}</h2>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)


var user = {
  name: 'Jagadish',
  age: 49,
}

function getlocation(location) {
  if (location) {
    return location
  } else {
    return 'unknown'
  }
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getlocation(user.location)}</p>
  </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
