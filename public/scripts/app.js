'use strict';

console.log('build-it-visible.js is running');

var app = {
  title: 'Visibility Toggle',
  defaultbutton: 'Show Details',
  togglebutton: 'Hide Details',
  details: 'Check out the details',
  current: 'Show Details',
  currenttxt: []
};

var toggleIt = function toggleIt() {
  if (app.current === app.defaultbutton) {
    console.log('in if');
    app.current = app.togglebutton;
    app.currenttxt = app.details;
  } else {
    app.current = app.defaultbutton;
    app.currenttxt = [];
  }
  toggle();
};

var toggle = function toggle() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleIt },
      app.current
    ),
    React.createElement(
      'p',
      null,
      app.currenttxt
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

toggle();
