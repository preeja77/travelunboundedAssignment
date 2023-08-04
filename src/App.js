import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Package from './components/Package'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/package" component={Package} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
