import React from "react";
import "./HomeAppliances.css";
import MProducts from "../MProducts";
import { images } from "../../../constants";

function HomeAppliances() {
  return (
    <div className="homeappliances">
      <div className="homeappliances__row">
        <h3>Best Selling Air Conditioners</h3>
        <div className="homeappliances__products">
          <MProducts
            id={1}
            title="Panasonic 1.5 Ton 3 Star Wi-Fi Twin-Cool Inverter Split Air Conditioner (White)"
            price={35990}
            image={images.Panasonic15Ton3Star}
            rating={4}
          />
          <MProducts
            id={2}
            title="LG 1.5 Ton 3 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling)"
            price={46490}
            image={images.LG15Ton5StarAIDUALInverter}
            rating={4}
          />
          <MProducts
            id={3}
            title="Voltas 1.4 Ton 3 Star Inverter Split AC(Copper, Adjustable Cooling)"
            price={30990}
            image={images.Voltas14Ton3StarInverterSplitAC}
            rating={4}
          />
          <MProducts
            id={4}
            title="Carrier 1.5 Ton 3 Star Inverter Split AC (Copper,ESTER Dxi, 4-in-1 Flexicool Inverter, 2022 Model,R32,White)"
            price={33999}
            image={images.Carrier15Ton3StarInverterSplitAC}
            rating={4}
          />
          <MProducts
            id={5}
            title="Whirlpool 1.5 Ton 3 Star, Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling Mode, HD Filter 2023 Model, S3K1PPO, White)"
            price={31990}
            image={images.Whirlpool15Ton3StarFlexicoolInverterSplitAC}
            rating={4}
          />
        </div>
      </div>
      <div className="homeappliances__row">
        <h3>Best Selling Refrigerators</h3>
        <div className="homeappliances__products">
          <MProducts
            id={6}
            title="AmazonBasics 44 L 2 Star Direct-Cool Single Door Mini Refrigerator (2022, Black, 2022 Model)"
            price={7990}
            image={images.AmazonBasics44L}
            rating={4}
          />
          <MProducts
            id={7}
            title="Godrej 564 L Frost Free Side-By-Side Refrigerator (RS EONVELVET 579 RFD GL BK)"
            price={59990}
            image={images.Godrej564LFrostFree}
            rating={5}
          />
          <MProducts
            id={8}
            title="Samsung 324 L 3 Star Inverter Frost Free Double Door Refrigerator (RT34T4513S8/HL)"
            price={34490}
            image={images.Samsung324L3StarInverter}
            rating={5}
          />
          <MProducts
            id={9}
            title="Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator"
            price={11990}
            image={images.Whirlpool184L2Star}
            rating={4}
          />
          <MProducts
            id={10}
            title="AmazonBasics 468 L Frost Free Side-by-Side Automatic Defrost Refrigerator"
            price={42290}
            image={images.AmazonBasics468LFrostFree}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAppliances;
