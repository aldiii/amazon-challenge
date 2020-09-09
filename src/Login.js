import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="amazon-logo" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="pasword"/>
                    <button className="login__signIn">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
                </p>
                <button className="login__register">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
