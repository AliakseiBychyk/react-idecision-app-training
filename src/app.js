console.log('App.js is runing!')

var app = {
  'title': 'Indecision App',
  'subtitle': 'This is some info'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
)

var user = {
  'name': 'Aliaksei Bychyk',
  'age': 45,
  'location': 'Brest, Belarus'
}
// var userName = 'Aleks Bychyk'
// var userAge = 45
// var userLocation = 'Brest, Belarus'
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
