

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './LogIn.css'
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(' ');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    if (user) {
        navigate('/inventory')
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleLogInUser = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Log in</h2>
                <form onSubmit={handleLogInUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <p style={{ color: 'red' }}>Error:{error?.message}</p>
                    {
                        loading && <p>Loading.....</p>
                    }
                    <input className='form-submit' type="submit" value="Log In" />
                </form>
                <p>New to Ema-john? <Link className='form-link' to='/signUp'>crate an account</Link></p>
            </div>
        </div>

    );
};

export default LogIn;