import React from 'react';

const About = () => {
    return (
        <div className="about-page page-fade-in" style={{ padding: '60px 20px', textAlign: 'center' }}>
            <h1>About BlueStore</h1>
            <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                BlueStore was founded with a simple goal: to provide a premium, curated shopping
                experience for tech enthusiasts and style icons. Based on our passion for
                manufacturing excellence and modern design, we bring you the best
                consumer electronics and fashion.
            </p>
            <div className="mission-box" style={{ background: '#f0f7ff', padding: '30px', borderRadius: '15px', marginTop: '40px' }}>
                <h2>Our Mission</h2>
                <p>Quality, Innovation, and Customer First.</p>
            </div>
        </div>
    );
};

export default About;