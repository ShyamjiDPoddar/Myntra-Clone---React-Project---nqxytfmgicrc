import React from "react";

const Product = ({ product, onClick }) => {
  return (
    <div className="indiv-tile-holder" onClick={onClick}>
      <img src={product.otherImages[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>Rs. {product.finalPrice}&nbsp;</span>
      <s>{product.strickPrice}&nbsp;</s>
      <span className="discount">{product.discount}% OFF</span>
    </div>
  );
};

export default Product;
