'use strict';

console.log('App.js is runing!');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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
    ),
    React.createElement(
      'li',
      null,
      'Item three'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Aliaksei Bychyk'
  ),
  React.createElement(
    'p',
    null,
    'Age: 45'
  ),
  React.createElement(
    'p',
    null,
    'Location: Brest, Belarus'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
