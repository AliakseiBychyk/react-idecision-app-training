'use strict';

console.log('App.js is runing!');

var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js! And I change it! Does it change!?'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
