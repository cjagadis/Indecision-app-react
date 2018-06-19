class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Learning React</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        <p>1. Learn by Reading</p>
        <p>2. Learn by Writing code</p>
        <p>3. Learn by Reading and Writing</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        <button>Add option</button>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
