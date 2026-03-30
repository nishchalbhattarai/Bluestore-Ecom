import React, { useState } from 'react';

const ProductBody = () => {
    const [products] = useState([
        { id: 1, name: "Sky Blue Watch", price: 120.00 },
        { id: 2, name: "Azure Headphones", price: 85.00 },
        { id: 3, name: "Cloud Sneakers", price: 150.00 },
        { id: 4, name: "Ocean Backpack", price: 45.00 },
    ]);

    return (
        <main className="content-area">
            {/* Hero Section */}
            <section className="hero">
                <h2>Your Style, Reimagined</h2>
                <p>Explore our premium light-blue collection.</p>
                <button className="hero-btn">Explore Now</button>
            </section>

            {/* Product Section */}
            <section className="product-section">
                <h3>Featured Products</h3>
                <div className="product-grid">
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <div className="image-placeholder">Product Image</div>
                            <h4>{product.name}</h4>
                            <p>${product.price.toFixed(2)}</p>
                            <button className="add-btn">Add to Cart</button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductBody;