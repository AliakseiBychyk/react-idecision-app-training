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

function getLocation (location) {
  if (location) return <p>Location: {location}</p>
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.name >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
