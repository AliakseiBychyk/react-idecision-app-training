console.log('App.js is runing!')

const app = {
  'title': 'Indecision App',
  'subtitle': 'This is some info - put your life in the hand of a computer',
  'options': ['One', 'Two', 'Three']
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const onRemoveAll = () => {
  app.options = []
  renderApp()
}

const onMakeDesicion = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0
            ? 'Here are your options'
            : 'No options'}
      </p>
      <button disabled={false} onClick={onMakeDesicion}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map(number => (
          <div key={number}>
            Number: {number}
          </div>
        ))
      }
      <ol>
        {
          app.options.map((option, index) => (
            <li key={index}>
              Option: {option}
            </li>
          ))
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        
      </form>
    </div>
  )
 
  ReactDOM.render(template, appRoot)
}


renderApp()

///////

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


