class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: 'Julie'
    }
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleAddOne() {
    console.log('handleAddOne method fired')
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }
  handleMinusOne() {
    console.log('handleMinusOne method fired')
    this.setState({ count: this.state.count - 1 })
  }
  handleReset() {
    console.log('handleReset method fired')
    this.setState({count: 0})
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
