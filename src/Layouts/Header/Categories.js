import React from "react";

import "./Categories.css";

import MenuIcon from "@mui/icons-material/Menu";

import download_the_app from "../../assets/download_the_app.jpg";

function Categories() {
  return (
    <div className="categories">
      <div className="categories__MenuIcon">
        <MenuIcon />
        <span className="categories__text">All</span>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Sell</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Amazon miniTV</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Best Sellers</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Mobiles</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Customer Service</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Today's Deals</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Electronics</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Prime</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Amazon Pay</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Fashion</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>New Releases</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Home & Kitchen</span>
        </div>
      </div>
      <div className="categories__nav">
        <div className="categories__option">
          <span>Beauty & Personal Care</span>
        </div>
      </div>
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
