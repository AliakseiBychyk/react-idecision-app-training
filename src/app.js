console.log('App.js is runing!')

var template = <p>This is JSX from app.js! And I change it! Does it change!?</p>

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
