import React from 'react';
import '../../src/App'
const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h1>BlueStore.</h1>
                    <p>Crafting premium digital experiences through curated fashion and tech.</p>
                </div>

                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">Latest Drop</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Collections</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Sustainability</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <div className="newsletter-box">
                        <h4>Stay in the loop</h4>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 BlueStore. All rights reserved.</p>
                <div className="social-icons">
                    <div className="icon-circle">In</div>
                    <div className="icon-circle">Tw</div>
                    <div className="icon-circle">Ig</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;