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
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        {this.props.options.map(option =>
          <Option key={option} text={option} />
        )}
        <Option />
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

class AddOption extends React.Component{
  render(){
    return (
      <div>AddOption compnent here</div>
    )
  }
}



ReactDom.render(<IndecisionApp />, document.getElementById('app'))