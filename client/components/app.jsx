import React, {useEffect, useState} from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  BrowserRouter as Router
} from 'react-router-dom'
import AppContext from './lib/context'
import Landing from './landing'
import Dashboard from './dashboard'
import LandingPage from './landing';

function App () {
  const [isAuthorized, setAuthorized] = useState(false)
  const [user, setUser] = useState({id: null, name:''})

  function authorize () {
    setAuthorized(isAuthorized => !isAuthorized)
  }

  function setUserId (id, name) {
    setUser({id, name})
  }

  const context = {
    user,
    isAuthorized,
    authorize,
    setUserId
  }
  return (
    <div id="main-container">
      <AppContext.Provider value={context}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/home" component={Dashboard}/>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
