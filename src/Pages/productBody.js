import React from 'react';

const ProductBody = () => {
    // SHORTCUT: Generate 12 products automatically
    // This creates an array [1, 2, 3... 12] and builds an object for each
    const products = Array.from({ length: 20 }, (_, i) => {
        const id = i + 1;
        return {
            id: id,
            name: `BlueStore Item #${id}`,
            price: `$${(Math.random() * 100 + 20).toFixed(2)}`, // Random price between $20-$120
            category: id % 3 === 0 ? "Tech" : id % 2 === 0 ? "Apparel" : "Accessories"
        };
    });

    return (
        <section className="product-section">
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            {/* Using product.id in the URL ensures each card gets a DIFFERENT random image */}
                            <img
                                src={`https://picsum.photos/seed/${product.id + 10}/400/300`}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="product-info">
                            <span className="category-tag">{product.category}</span>
                            <h3>{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                            <button className="btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductBody;