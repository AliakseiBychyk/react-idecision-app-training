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

var templateTwo = (
  <div>
    <h1>Aliaksei Bychyk</h1>
    <p>Age: 45</p>
    <p>Location: Brest, Belarus</p>
  </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
