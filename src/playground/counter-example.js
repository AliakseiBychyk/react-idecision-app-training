class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleAddOne() {
    console.log('handleAddOne method fired')
  }
  handleMinusOne() {
    console.log('handleMinusOne method fired')
  }
  handleReset() {
    console.log('handleReset method fired')
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0

// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const minusOne = () => {
//   count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const renderConterApp = () => {
//   const templateThree = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={dddOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )

//   ReactDOM.render(templateThree, appRoot)
// }

// renderCounterApp()