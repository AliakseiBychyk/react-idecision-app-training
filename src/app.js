console.log('App.js is runing!')

const app = {
  'title': 'Indecision App',
  'subtitle': 'This is some info',
  'options': ['One', 'Two', 'Three']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0
          ? 'Here are your options'
          : 'No options'}
    </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
)

const user = {
  'name': 'Aliaksei Bychyk',
  'age': 45,
  'location': 'Brest, Belarus'
}

function getLocation (location) {
  if (location) return <p>Location: {location}</p>
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)


let count = 0
const addOne = () => {
  console.log('addOne')
}
const minusOne = () => {
  console.log('minusOne')
}
const reset = () => {
  console.log('reset')
}

const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={dddOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
)


const appRoot = document.getElementById('app')

ReactDOM.render(templateThree, appRoot)
