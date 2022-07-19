import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Join Our Coffee Club!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="/images/coffeefarm.jpg"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;