import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import { auth } from "../../services/Firebase/Firebase";
import { useStateValue } from "../../services/Utils/StateProvider";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../assets/logo.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>

      <div className="header__loc">
        <span className="header__locLineOne">Hello</span>
        <span className="header__locLineTwo">
          <LocationOnIcon className="header__LocationOnIcon" />
          Select Address
        </span>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__language">
        <select>
          <option value="en">EN - English</option>
          <option value="hi">HI - Hindi: हिंदी</option>
          <option value="mr">MR - Marathi: मराठी</option>
        </select>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Sign in"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <div className="header__forcartcolourchange">
              <span className="header__optionLineTwo header__cartCount">
                {basket?.length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
