console.log('App.js is running!')

const appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation',
  options: ['One','Two']
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
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
