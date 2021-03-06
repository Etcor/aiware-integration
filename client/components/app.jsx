import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import AppContext from './lib/context'
import Landing from './landing'

function App () {
  const [isAuthorized, setAuthorized] = useState(false)
  const [user, setUser] = useState(null)

  function login () {
    fetch('/api/auth')
      .then(res => res.json())
      .then(user => {
        setUser(user.id)
        setAuthorized(true)
      })
      .catch(console.error)
  }

  function logout () {
    setUser(null)
    setAuthorized(false)
  }

  const context = {
    user,
    isAuthorized,
    logout,
    login
  }
  return (
    <div id="main-container">
      <AppContext.Provider value={context}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App
