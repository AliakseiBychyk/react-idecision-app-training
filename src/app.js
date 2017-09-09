console.log('App.js is runing!')

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
)

var userName = 'Aleks Bychyk'
var userAge = 45
var userLocation = 'Brest, Belarus'
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
