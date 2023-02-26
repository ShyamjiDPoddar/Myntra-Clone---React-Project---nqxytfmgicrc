import React, { useState } from "react";
import CartModal from "./CartModal";
import Product from "./Product";
import ProductModal from "./ProductModal";

const ProductList = ({
  products,
  cart,
  setCart,
  isCartVisible,
  setIsCartVisible,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="product-tile-holder">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setCart={setCart}
        />
      )}
      {isCartVisible && (
        <CartModal setIsCartVisible={setIsCartVisible} cart={cart} />
      )}
    </>
  );
};

export default ProductList;
