'use strict';

console.log('App.js is running!');

var appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation'

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appobject.title
  ),
  React.createElement(
    'h2',
    null,
    appobject.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Jagadish',
  age: 34,
  location: 'Mountain House'
};

function getlocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  false,
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getlocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
