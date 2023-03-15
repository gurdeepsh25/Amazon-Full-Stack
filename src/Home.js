import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./Home.css";
import Product from "./Layouts/Products/Product";

// MProducts
import Styles_for_men from "./assets/MProducts/Styles_for_men.png";
import Home_appliances from "./assets/MProducts/Home_appliances.png";
import Clearance_store from "./assets/MProducts/Clearance_store.jpg";
import Styles_for_women from "./assets/MProducts/Styles_for_women.png";
import Professional_tools from "./assets/MProducts/Professional_tools.png";
import Automotive_essentials from "./assets/MProducts/Automotive_essentials.png";
import Revamp_your_home_in_style from "./assets/MProducts/Revamp_your_home_in_style.png";
import Home_décor_picks_from_local_shops from "./assets/MProducts_banner/Home_décor_picks_from_local_shops.png";

// Best Selling Smartphones
import iQOO_11_5G from "./assets/Products/iQOO_11_5G.jpg";
import Nokia_X30_5G from "./assets/Products/Nokia_X30_5G.jpg";
import iQOO_Neo_7_5G from "./assets/Products/iQOO_Neo_7_5G.jpg";
import OnePlus_11R_5G from "./assets/Products/OnePlus_11R_5G.jpg";
import Samsung_Galaxy_S23_Ultra_5G from "./assets/Products/Samsung_Galaxy_S23_Ultra_5G.jpg";

// Best Selling Speakers
import Echo_Dot from "./assets/Products/Echo_Dot.jpg";
import Marshall_Emberton_20 from "./assets/Products/Marshall_Emberton_20.jpg";
import Infinity_JBL_Fuze_Pint from "./assets/Products/Infinity_JBL_Fuze_Pint.jpg";
import boAt_Stone_135_Portable from "./assets/Products/boAt_Stone_135_Portable.jpg";
import Portronics_Sound_Slick_5_80W from "./assets/Products/Portronics_Sound_Slick_5_80W.jpg";

function Home() {
  // Function for ImageSlider (Amazon Homepage)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % 15);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="home">
      <div
        className={`slider-image ${activeIndex === 0 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 1 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 2 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 3 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 4 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 5 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 6 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 7 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 8 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 9 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 10 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 11 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 12 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 13 ? "active" : ""}`}
      ></div>
      <div
        className={`slider-image ${activeIndex === 14 ? "active" : ""}`}
      ></div>
      <div className="home__container">
        <div className="slider-container ">
          <div className="slider-image"></div>
        </div>

        <div className="home__row">
          <div className="mProducts">
            <h1>Home appliances | Up to 50% off</h1>
            <img src={Home_appliances} alt="Home appliances on sale"></img>
            <p>See more</p>
          </div>
          <div className="mProducts">
            <h1>Up to 70% off | Clearance store & more</h1>
            <img src={Clearance_store} alt=""></img>
            <p>See more</p>
          </div>
          <div className="mProducts">
            <h1>Automotive essentials | Up to 60% off</h1>
            <img src={Automotive_essentials} alt=""></img>
            <p>See more</p>
          </div>
          <div className="signInCard">
            <h1>Sign in for your best experience</h1>
            <Link to="/login">
              <button className="signInCard__btn">Sign in Securely</button>
            </Link>
          </div>
        </div>
        <div className="home__row">
          <div className="mProducts">
            <h1>Up to 60% off | Styles for women</h1>
            <img src={Styles_for_women} alt=""></img>
            <p>See more</p>
          </div>
          <div className="mProducts">
            <h1>Up to 60% off | Professional tools, testing & more</h1>
            <img src={Professional_tools} alt=""></img>
            <p>See more</p>
          </div>
          <div className="mProducts">
            <h1>Revamp your home in style & more</h1>
            <img src={Revamp_your_home_in_style} alt=""></img>
            <p>See more</p>
          </div>
          <div className="mProducts">
            <h1>Up to 60% off | Styles for men & more</h1>
            <img src={Styles_for_men} alt=""></img>
            <p>See more</p>
          </div>
        </div>
        <div className="home__row">
          <div className="mProducts__banner">
            <h1>Up to 60% off | Home décor picks from local shops</h1>{" "}
            <p>Visit the Store</p>
            <img src={Home_décor_picks_from_local_shops} alt="" />
          </div>
        </div>
        <div className="home__row">
  
          <div className="home__row">
            <Product
              id={1}
              title="iQOO Neo 7 5G (Frost Blue, 8GB RAM, 128GB Storage) | MediaTek Dimensity 8200, only 4nm Processor in The Segment | 50% Charge in 10 mins"
              price={29999}
              image={iQOO_Neo_7_5G}
              rating={4}
            />
            <Product
              id={2}
              title="OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage) | 120 Hz Super Fluid AMOLED | Processor: Snapdragon 8+ Gen 1 Mobile Platform"
              price={39999}
              image={OnePlus_11R_5G}
              rating={4}
            />
            <Product
              id={3}
              title="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage) | 6.8” Dynamic AMOLED 2X Infinity-O QHD+ Edge Screen. 120Hz Adaptive Refresh Rate"
              price={(1, 24999)}
              image={Samsung_Galaxy_S23_Ultra_5G}
              rating={5}
            />
            <Product
              id={4}
              title="iQOO 11 5G (Legend, 8GB RAM, 256 GB Storage) | Snapdragon ® 8 Gen 2 Mobile Platform | 2K E6 AMOLED Display | V2 Intelligent Display Chip"
              price={59990}
              image={iQOO_11_5G}
              rating={5}
            />
            <Product
              id={5}
              title="Nokia X30 5G, 6.43” FHD+ AMOLED PureDisplay, 90Hz Refresh Rate, 3 Years Android OS and Monthly Security Updates, 50MP PureView OIS Camera"
              price={48999}
              image={Nokia_X30_5G}
              rating={3}
            />
          </div>
        </div>
        <div className="home__row">
         
          <div className="home__row">
            <Product
              id={6}
              title="Echo Dot (3rd Gen) - Smart speaker with Alexa (Black) Voice control your music | Can hear you across the room"
              price={2499}
              image={Echo_Dot}
              rating={5}
            />
            <Product
              id={7}
              title="Portronics Sound Slick 5 80W Bluetooth Wireless Soundbar with LED Display, 3.5mm Aux-in, Supports USB, Optical Input Port"
              price={3399}
              image={Portronics_Sound_Slick_5_80W}
              rating={4}
            />
            <Product
              id={8}
              title="boAt Stone 135 Portable Wireless Speaker with 5W RMS Immersive Sound, IPX4 Water Resistance, True Wireless Feature)"
              price={899}
              image={boAt_Stone_135_Portable}
              rating={4}
            />
            <Product
              id={9}
              title="Infinity (JBL) Fuze Pint, Wireless Ultra Portable Mini Speaker with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0"
              price={999}
              image={Infinity_JBL_Fuze_Pint}
              rating={4}
            />
            <Product
              id={10}
              title="Marshall Emberton 20 Watt Wireless Bluetooth Portable Speaker (Black and Brass) IPX7 water-resistance rating"
              price={14291}
              image={Marshall_Emberton_20}
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
