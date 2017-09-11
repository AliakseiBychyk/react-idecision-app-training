let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const renderConterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={dddOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )

  ReactDOM.render(templateThree, appRoot)
}

renderCounterApp()