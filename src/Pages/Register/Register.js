import { useRef, useState } from 'react';
import './Register.scss';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleClick = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_logo.svg.png?20220504140802"
                        alt="Logo" 
                    />
                    <button className="loginBtn">
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies, Tv shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership
                </p>
                {
                    !email ? (
                    <div className="input">
                        <input type="email" placeholder='Enter your email' ref={emailRef} />
                        <button className='registerBtn' onClick={handleClick}>Get started</button>
                    </div>
                    ) : (
                    <form className="input">
                        <input type="password" placeholder='password' ref={passwordRef} />
                        <button className='registerBtn' onClick={handleFinish}>Start</button>
                    </form>
                    )
                }
                
            </div>
            
        </div>
    )
}
export default Register;