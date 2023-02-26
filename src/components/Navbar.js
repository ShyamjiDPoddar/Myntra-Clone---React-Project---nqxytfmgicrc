import React from "react";
import logo from "../icon.jpeg";
import cart from "../shopping-cart-solid.svg";

const Navbar = ({
  searchedText,
  setSearchedText,
  cartLength,
  setIsCartVisible,
}) => {
  return (
    <nav>
      <div className="icon-holder">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here.."
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </div>
      <div className="cart-holder" onClick={() => setIsCartVisible(true)}>
        <img src={cart} alt="cart" className="cart" />
        <div className="cart-list-length">{cartLength}</div>
      </div>
    </nav>
  );
};

export default Navbar;
