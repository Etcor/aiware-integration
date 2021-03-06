import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import AppContext from './lib/context'

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
    isAuthorized
  }
  const theme = { color: context.isAuthorized ? 'green' : 'red'}
  if (!isAuthorized) return <h1 onClick={login} style={theme}>404 NOT AUTHORIZED</h1>
  return (
    <div>
      <AppContext.Provider value={context}>
        <h1 onClick={logout} style={theme}>AUTHORIZED :)</h1>
      </AppContext.Provider>
    </div>
  )
}

export default App
