import React, {useState, useContext} from 'react'
import AppContext from './lib/context'

function Landing (props) {
    const {
        user,
        login,
        logout,
        isAuthorized
    } = useContext(AppContext)

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
                <div className="login-btn">
                    <p>LOGIN</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing
