import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div>
      <div className="cards">
        <h1>Check out these EPIC qualifications!</h1>
        <div className="cards__container">
          <div className="cards__item__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-1.jpg"
                text="This is an example qualification!"
                label="Qualification"
                path="/projects"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
