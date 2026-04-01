import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainBody from './MainBody';
import About from './About';
const Header = () => {
    const location = useLocation();
    // Mock cart count - in a real app, this comes from state/context
    const cartCount = 3;

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand Logo */}
                <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                    <img
                        src="/logo.svg"
                        alt="BlueStore Logo"
                        style={{ width: '40px', height: 'auto', marginRight: '10px' }}
                    />
                    <h1>BlueStore</h1>
                </Link>

                {/* Search Bar */}
                <div className="search-wrapper">

                    <input
                        type="text"
                        placeholder="Search products..."
                        className='search-input'
                        aria-label="Search"
                    />
                    <span className="search-icon">🔍</span>
                </div>

                {/* Navigation Links */}
                <nav className="nav-menu">
                    <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/shop" className="nav-item">Shop</Link>
                    <Link to="/about" className="nav-item">About</Link>
                </nav>

                {/* Right Side Actions: Cart + Auth */}
                <div className="nav-actions">
                    {/* NEW: Cart Icon with Badge */}
                    <Link to="/cart" className="cart-icon-container">
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    <div className="auth-group">
                        <Link to="/login" state={{ mode: 'login' }}>
                            <button className="btn-secondary">Log In</button>
                        </Link>
                        <Link to="/login" state={{ mode: 'signup' }}>
                            <button className="btn-primary">Join Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;