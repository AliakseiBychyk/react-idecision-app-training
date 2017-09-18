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
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) this.setState({ options })
    } catch (e) {
      // do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
      
  }
  componentWillUnmount() {
    console.log('component wil unmount')
  }

  handleDeleteOptions () {
    this.setState({ options: [] })
  }
  handleDeleteOption(optionToRemove) {
    this.setState({
      options: this.state.options.filter((option) => optionToRemove !== option)
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Actions = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map(option =>(
          <Option 
            key={option} 
            text={option}
            handleDeleteOption={props.handleDeleteOption}  
          />
        ))
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.text}
      <button 
        onClick={(e) =>
          props.handleDeleteOption(props.text)
        }
      >
        remove
      </button>
    </div>
  )
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
    this.setState({ error })
    if (!error) {
      e.target.elements.option.value = ''
    }
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

ReactDOM.render(<IndecisionApp options={['option one', 'option two']}/>, document.getElementById('app'))
