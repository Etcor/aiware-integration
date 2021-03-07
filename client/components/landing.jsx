import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import Button from './button'
import AppContext from './lib/context'

function LandingPage (props) {
    const history = useHistory()
    const {
        user,
        authorize,
        setUserId,
        isAuthorized
    } = useContext(AppContext)

    function login () {
        fetch('/api/auth')
            .then(res => res.json())
            .then(user => {
                authorize()
                setUserId(user.id, user.name)
                return history.push('/home')
            })
            .catch(console.error)
    }

    return (
        <>
        <div className="top-bg"/>
        <div className="landing-box">
            <div className="login-box">
                <h1 >Welcome Back!</h1>
                <p>Please Login to continue</p>
                <div className="login-group">
                    <label className="login-label">Email</label >
                    <input type="text" className="login-input"/>
                    <label className="login-label">Password</label>
                    <input type="text" className="login-input"/>
                </div>
                <Button
                    text={"LOGIN"}
                    onClick={login}
                    className={"login-btn"}
                />
            </div>
        </div>
        </>
    )
}

export default LandingPage
