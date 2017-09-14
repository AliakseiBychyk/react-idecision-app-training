class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <Header />
        <Actions />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
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

// Options -> Options component here
class Options extends React.Component{
  render(){
    return(
      <div>
        Options component here  
        <Option />
      </div>
    )
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>Option component here</div>
    )
  }
}

// AddOption -> AddOption component here
class AddOption extends React.Component{
  render(){
    return (
      <div>AddOption compnent here</div>
    )
  }
}



ReactDom.render(<IndecisionApp />, document.getElementById('app'))