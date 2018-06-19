let visibility = false

const toggle = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Here are some details</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
}

render()
