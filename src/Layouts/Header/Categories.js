import React from "react";

import "./Categories.css";

import MenuIcon from "@mui/icons-material/Menu";

import download_the_app from "../../assets/download_the_app.jpg";

const categories = [
  "Sell",
  "Amazon miniTV",
  "Best Sellers",
  "Mobiles",
  "Customer Service",
  "Today's Deals",
  "Electronics",
  "Prime",
  "Amazon Pay",
  "Fashion",
  "New Releases",
  "Home & Kitchen",
  "Beauty & Personal Care",
];

function Categories() {
  return (
    <div className="categories">
      <div className="categories__MenuIcon">
        <MenuIcon />
        <span className="categories__text">All</span>
      </div>

      {categories.map((category) => (
        <div className="categories__nav" key={category}>
          <div className="categories__option">
            <span>{category}</span>
          </div>
        </div>
      ))}

      <div className="categories__downloadapp">
        <img
          className="categories__downloadappImg"
          src={download_the_app}
          alt=""
        />
      </div>
    </div>
  );
}

export default Categories;
