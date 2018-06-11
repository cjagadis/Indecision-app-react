'use strict';

console.log('App.js is running!');

var appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation',
  options: ['One', 'Two']

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appobject.title
  ),
  appobject.subtitle && React.createElement(
    'h2',
    null,
    appobject.subtitle
  ),
  React.createElement(
    'p',
    null,
    appobject.options.length > 0 ? 'Here are your options' : 'No Options'
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

ReactDOM.render(template, appRoot);
