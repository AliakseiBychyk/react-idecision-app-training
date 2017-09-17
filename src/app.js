const obj = {
  name: 'Vikram',
  getName () {
    return this.name
  }
}

// const getName = obj.getName.bind(obj)
const getName = obj.getName.bind({name: 'Andrew'}) // bind the context in which we call the method
console.log(getName())

class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleDeleteOptions () {
    this.setState({
      options: []
    })
  }
  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already exist'
    } else {
      this.setState({
        options: [...this.state.options, option] // this.state.options.concate([option])
      })
    }
  }
  render () {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <h1>Title</h1>
        <Header title={title} subtitle={subtitle} />
        <Actions
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    this.props
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Actions extends React.Component {
  render () {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions} >Remove All</button>
        {
          this.props.options.map(option =>
            <Option key={option} text={option} />
          )
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption (e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState({error})
  }
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} >
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
ReactDOM.render(<User name="Andrew" age={26} />, document.getElementById('app'))

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
