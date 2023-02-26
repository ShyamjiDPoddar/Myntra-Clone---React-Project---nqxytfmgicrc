import React, { useState } from "react";

const SortProducts = ({ setSortBy }) => {
  return (
    <div className="sort-holder">
      <h2>Sort by :&nbsp;</h2>
      <select onChange={(e) => setSortBy(e.target.value)} defaultValue="latest">
        <option value="latest">What's new</option>
        <option value="price">Price (low to high)</option>
        <option value="discount">Better discount</option>
      </select>
    </div>
  );
};

export default SortProducts;
