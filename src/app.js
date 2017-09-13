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
// AddOption -> AddOption component here

class Options extends React.Component{
  render(){
    return(
      <div>Options component here</div>
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


const jsx = {
  <div>
    <h1>Title</h1>
    <Header />
    <Options />
    <AddOption />
  </div>
}

ReactDom.render(jsx, document.getElementById('app'))