import React from 'react';
import { Link } from 'react-router-dom'; // Crucial for error-free navigation

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>BlueStore.</h3>
                    <p>Crafting premium digital experiences through curated fashion and tech.</p>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul>
                        {/* Use <Link> instead of <a> to avoid "anchor-is-valid" lint errors */}
                        <li><Link to="/shop">Latest Drop</Link></li>
                        <li><Link to="/shop">Best Sellers</Link></li>
                        <li><Link to="/collections">Collections</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/sustainability">Sustainability</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Stay in the loop</h4>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        {/* Added aria-label for accessibility errors */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email for newsletter"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} BlueStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;