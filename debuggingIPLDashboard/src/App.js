import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team-matches/:id" component={TeamMatches} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
