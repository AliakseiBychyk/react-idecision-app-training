'use strict';

var appRoot = document.getElementById('app');

var visible = false;
var onToggleVisible = function onToggleVisible() {
  visible = !visible;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggleVisible },
      'Show details'
    ),
    visible && React.createElement(
      'p',
      null,
      'Hey. There are some details you can now see!'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
