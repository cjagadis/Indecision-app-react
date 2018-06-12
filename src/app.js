console.log('App.js is running!')

const appobject = {
  title: 'First React App',
  subtitle: 'Babel Compilation',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value
  if (option) {
    appobject.options.push(option)
    e.target.elements.option.value = ''

    renderForm()
  }
}

const removeAll = () => {
  appobject.options = []

  renderForm()
}

const renderForm = () => {
  const template = (
    <div>
      <h1>{appobject.title}</h1>
      {appobject.subtitle && <h2>{appobject.subtitle}</h2>}
      <p>{appobject.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <p>{appobject.options.length}</p>
      <button onClick={removeAll}>removeAll</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderForm()
