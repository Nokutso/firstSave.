import React from 'react';

const ProductCard = ({ product }) => (
  <div>
    <img src={product.image} alt={product.name} width={100} />
    <h3>{product.name}</h3>
    <p>R{product.price}</p>
    <p>{product.store}</p>
    <a href={product.link} target="_blank" rel="noopener noreferrer">View</a>
  </div>
);

export default ProductCard;