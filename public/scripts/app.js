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

// let count = 0

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  )
);
// console.log(templateThree)
// const appRoot = document.getElementById('app')
// ReactDOM.render(templateThree, appRoot)

// register the function with the button
// normally this is not done
// we follow the convention in templateThree
var template4 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: function onClick() {
        console.log('some value here');
      } },
    '+1'
  )
);
// console.log(template4)
// const appRoot = document.getElementById('app')

// ReactDOM.render(template4, appRoot)

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var resetBt = function resetBt() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template5 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetBt },
      'reset'
    )
  );
  ReactDOM.render(template5, appRoot);
};

renderCounterApp();
