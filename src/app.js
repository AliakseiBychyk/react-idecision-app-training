class Header extends React.Component {
  render () {
    return <p>This is from Header</p>
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

const jsx = {
  <div>
    <h1>Title</h1>
    <Header />
  </div>
}

ReactDom.render(jsx, document.getElementById('app'))