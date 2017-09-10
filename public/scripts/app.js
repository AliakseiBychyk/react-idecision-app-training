'use strict';

console.log('App.js is runing!');

var app = {
  'title': 'Indecision App',
  'subtitle': 'This is some info'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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

var user = {
  'name': 'Aliaksei Bychyk',
  'age': 45,
  'location': 'Brest, Belarus'
};

function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.name >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
