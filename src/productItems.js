import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <div className="product-image-container">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>

      <div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    </div>

  );
};

export default ProductItem;
