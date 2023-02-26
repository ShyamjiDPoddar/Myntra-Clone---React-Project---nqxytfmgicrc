import React from "react";
import Modal from "./Modal";

const ProductModal = ({ product, setSelectedProduct, setCart }) => {
  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <Modal>
      <div className="modal" onClick={handleClose}>
        <div id="product-modal">
          <button className="close-btn" onClick={handleClose}>
            x
          </button>
          <div className="images">
            {product.otherImages.map((image, index) => (
              <img src={image} alt={`${product.name} ${index}`} />
            ))}
          </div>
          <div className="info">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Rs. {product.finalPrice}</p>
            <p>
              <s>Rs. {product.strickPrice}</s>
            </p>
            <p className="discount">{product.discount}%</p>
            <h2>Size Chart</h2>
            <div className="select-size">
              {product.productSize.split(", ").map((size) => (
                <div className="size-option">{size}</div>
              ))}
            </div>
            <button
              className="add-cart-btn"
              onClick={() => setCart((prev) => [...prev, product])}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
