import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div id="menu" className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits you Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              tags={wine.tags}
              price={wine.price}
              title={wine.title}
              key={wine.title + index}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="coctail" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              tags={cocktail.tags}
              price={cocktail.price}
              title={cocktail.title}
              key={cocktail.title + index}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "50px" }}>
      <button type="button" className="custom__button">
        view more
      </button>
    </div>
  </div>
);

export default SpecialMenu;
