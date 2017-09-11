const appRoot = document.getElementById('app')

let visible = false
const onToggleVisible = () => {
  visible = !visible
  renderApp()
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleVisible}>Show details</button>
      {visible && <p>Hey. There are some details you can now see!</p>}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()
