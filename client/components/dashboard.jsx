import React, {useContext} from 'react'
import AppContext from './lib/context'

function Dashboard() {
    const {
        user,
        isAuthorized
    } = useContext(AppContext)

    return (
        <h1>Hello {user.name}, you have been {isAuthorized ? 'authorized': 'caught'}.</h1>
    )
}

export default Dashboard
