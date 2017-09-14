class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['Thing one', 'Thing two', 'Thing three']
    return (
      <div>
        <h1>Title</h1>
        <Header title={title} subtitle={subtitle} />
        <Actions />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
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
  handlePick() {
    alert('handlePick')
  }
  render () {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method

class Options extends React.Component{
  handleRemoveAll() {
    alert('remove all options')
  }
  render(){
    return(
      <div>
        {this.props.options.map(option =>
          <Option key={option} text={option} />
        )}
        <button onClick={this.hadleRemoveAll} >Remove All</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}  
      </div>
    )
  }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component{

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) alert(option)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption} >
          <input type="text" name="option" />
          <button onClick={} >Add Option</button>
        </form>
      </div>
    )
  }
}



ReactDom.render(<IndecisionApp />, document.getElementById('app'))