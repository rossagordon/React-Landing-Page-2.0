import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check it out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/roasting.jpg"
              text="We select and source the best coffees from around the world. Our focus is to serve the best coffee, while establishing direct relationships to best support our produce partners."
              label="About"
              path="/about"
            />

            <CardItem
              src="images/coffeefarm.jpg"
              text="Join Our Coffee Club! For $29.99 a month, we send you 2 12oz bags of freshly roasted coffee per month, along with 1 free monthly coffee at any Buddy's Coffee Location"
              label="Coffee Club"
              path="/about"
            />

            <CardItem
              src="images/baristas.jpg"
              text="We want work to be fun. Free coffee, flexible hours, and benefits available for everyone. Apply today!"
              label="Jobs"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
