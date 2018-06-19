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

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appobject.options.length)
  const option = appobject.options[randomNumber]
  alert(option)
}

const numbers = [99, 98, 97]

const renderForm = () => {
  const template = (
    <div>
      <h1>{appobject.title}</h1>
      {appobject.subtitle && <h2>{appobject.subtitle}</h2>}
      <p>{appobject.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={appobject.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={removeAll}>removeAll</button>
      <ol>
        {
          appobject.options.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
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
