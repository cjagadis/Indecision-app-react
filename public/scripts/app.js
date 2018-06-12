'use strict';

console.log('App.js is running!');

var appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    appobject.options.push(option);
    e.target.elements.option.value = '';

    renderForm();
  }
};

var removeAll = function removeAll() {
  appobject.options = [];

  renderForm();
};

var numbers = [99, 98, 97];

var renderForm = function renderForm() {
  var template = React.createElement(
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
      'p',
      null,
      appobject.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'removeAll'
    ),
    React.createElement(
      'ol',
      null,
      appobject.options.map(function (item) {
        return React.createElement(
          'li',
          { key: item },
          item
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderForm();
