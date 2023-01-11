import React from 'react'
import './Login.scss'
function Login() {
return (
    <div className='Login'>
        <div className="top">
                <div className="wrapper">
                    <img className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_logo.svg.png?20220504140802"
                        alt="Logo" 
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                <input type="email" placeholder='Enter your email OR phone number' />
                <input type="password" placeholder='Enter your password' />
                <button className='loginBtn'>Sign In</button>
                <span>New to netflix ? <b>Sign Up</b></span>
                <small>
                    this page is protected by Google reCAPTCHA to ensure you are not a robot <b>Learn more</b>
                </small>
                </form>
            </div>
    </div>
)
}

export default Login