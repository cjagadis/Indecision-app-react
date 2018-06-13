console.log('build-it-visible.js is running')

const app = {
  title: 'Visibility Toggle',
  defaultbutton: 'Show Details',
  togglebutton: 'Hide Details',
  details: 'Check out the details',
  current: 'Show Details',
  currenttxt: []
}

const toggleIt = () => {
  if (app.current === app.defaultbutton) {
    console.log('in if')
    app.current = app.togglebutton
    app.currenttxt = app.details
  } else {
    app.current = app.defaultbutton
    app.currenttxt = []
  }
  toggle()
}

const toggle = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleIt}>{app.current}</button>
      <p>{app.currenttxt}</p>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

toggle()
