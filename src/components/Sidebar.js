import React from "react";

const Sidebar = ({ setGender, setCategories }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCategories((prev) => [...prev, value]);
    } else {
      setCategories((prev) => prev.filter((c) => c !== value));
    }
  };

  return (
    <div className="filter-holder">
      <div className="filter">
        <h2>Gender</h2>
        <div className="input-group">
          <input
            type="radio"
            name="gender"
            value="M"
            id="men"
            defaultChecked
            onChange={handleGenderChange}
          />
          <label htmlFor="men">Men</label>
        </div>
        <div className="input-group">
          <input
            type="radio"
            name="gender"
            value="F"
            id="women"
            onChange={handleGenderChange}
          />
          <label htmlFor="women">Women</label>
        </div>
      </div>

      <div className="filter">
        <h2>Category</h2>
        <div className="input-group">
          <input
            type="checkbox"
            name="category"
            value="white"
            id="white"
            onChange={handleCategoriesChange}
          />
          <label htmlFor="white">White</label>
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            name="category"
            value="folded"
            id="folded-sleeves"
            onChange={handleCategoriesChange}
          />
          <label htmlFor="folded-sleeves">Folded Sleeves</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
