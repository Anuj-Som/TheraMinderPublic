import React, { Component, lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Workout from './Index/workout.jsx'

import '../public/stylesheets/scss/main.scss'

const Index = lazy(() => import('./Index/index.jsx'))


// <IMPORTS> DON'T CHANGE THIS LINE - Component file imports will be added above here.

class App extends Component {
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/:phone' component={Workout} />
            {/* <ROUTES> DON'T CHANGE THIS LINE - Route tags will be added above here. */}
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

render(<App />, document.getElementById('root'))
