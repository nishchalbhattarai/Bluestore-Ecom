import React from 'react';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand Logo */}
                <div className="logo">
                    <span className="logo-dot"></span>
                    <h1>BlueStore</h1>
                </div>

                {/* Search Bar - Vital for E-commerce */}
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search products..."
                        aria-label="Search"
                    />
                </div>
                {/* Navigation Links */}
                <nav className="nav-menu">
                    <a href="/" className="nav-item active">Home</a>
                    <a href="/shop" className="nav-item">Shop</a>
                    <div className="dropdown">
                        <span className="nav-item">Categories ▾</span>
                        {/* Simple dropdown could go here */}
                    </div>
                </nav>

                {/* Action Buttons */}
                <div className="auth-group">
                    <button className="btn-secondary">Log In</button>
                    <button className="btn-primary">Join Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;