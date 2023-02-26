import React, { useEffect, useState } from "react";
import "../styles/App.css";
import data from "../data";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";
import SortProducts from "./SortProducts";
const App = () => {
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState("M");
  const [categories, setCategories] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    let filteredProducts = data;

    if (sortBy === "price") {
      filteredProducts = data.sort((a, b) => a.finalPrice - b.finalPrice);
    }

    if (sortBy === "discount") {
      filteredProducts = data.sort((a, b) => b.discount - a.discount);
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.gender === gender
    );

    if (categories.includes("folded")) {
      filteredProducts = filteredProducts.filter(
        (product) => product.folded.toLowerCase() === "y"
      );
    }

    if (categories.includes("white")) {
      filteredProducts = filteredProducts.filter(
        (product) => product.cat.toLowerCase() === "w"
      );
    }

    if (searchedText.length !== 0) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchedText) ||
          product.description.toLowerCase().includes(searchedText)
      );
    }

    setProducts(filteredProducts);
  }, [gender, categories, searchedText, sortBy]);

  return (
    <div id="main">
      <Navbar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        cartLength={cart.length}
        setIsCartVisible={setIsCartVisible}
      />
      <main className="main-container">
        <Sidebar setGender={setGender} setCategories={setCategories} />
        <div className="products-container">
          <SortProducts setSortBy={setSortBy} />
          <ProductList
            products={products}
            cart={cart}
            setCart={setCart}
            isCartVisible={isCartVisible}
            setIsCartVisible={setIsCartVisible}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
