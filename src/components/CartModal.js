import React from "react";
import Modal from "./Modal";
import Product from "./Product";

const CartModal = ({ cart, setIsCartVisible }) => {
  const handleClose = () => {
    setIsCartVisible(false);
  };

  const items = cart.length;
  const originalPrice = cart.reduce((a, p) => a + Number(p.strickPrice), 0);
  const finalPrice = cart.reduce((a, p) => a + Number(p.finalPrice), 0);
  const discount = originalPrice - finalPrice;

  return (
    <Modal>
      <div className="modal" onClick={handleClose}>
        <div id="cart-modal-content">
          <button className="close-btn" onClick={handleClose}>
            x
          </button>
          <div className="products">
            {cart.map((product, index) => (
              <Product key={index} product={product} onClick={() => {}} />
            ))}
          </div>
          <div className="cart-info">
            <p>
              <b>Total Items</b>&nbsp;{items}
            </p>
            <p>
              <b>Total Original Price</b>&nbsp;{originalPrice}
            </p>
            <p>
              <b>Total Discount</b>&nbsp;{discount}
            </p>
            <p>
              <b>Final Price</b>&nbsp;{finalPrice}
            </p>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
