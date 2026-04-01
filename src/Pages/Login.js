import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Login() {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.state?.mode !== 'signup');


    useEffect(() => {
        if (location.state?.mode === 'signup') {
            setIsLogin(false);
        } else if (location.state?.mode === 'login') {
            setIsLogin(true);
        }
    }, [location]);
    return (
        <div className="login-page">
            {/* <Link to="/" className="back-home">← Back to Store</Link> */}

            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="brand-logo-circle">B</div>
                        <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                        <p>{isLogin ? 'Login to manage your orders' : 'Join the BlueStore community'}</p>
                    </div>

                    <div className="auth-methods">
                        <button className="google-btn" type="button">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" />
                            <span>Continue with Google</span>
                        </button>
                    </div>

                    <div className="divider">
                        <span>OR EMAIL</span>
                    </div>

                    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                        )}
                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="email@bluestore.com" required />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>

                        <div className="form-utility">
                            {isLogin && (
                                <label className="checkbox-container">
                                    <input type="checkbox" /> Remember me
                                </label>
                            )}
                            <Link to="/" className="forgot-link">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="login-submit-btn">
                            {isLogin ? 'Sign In' : 'Get Started'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            {isLogin ? "New to BlueStore?" : "Already a member?"}{' '}
                            <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;