import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Good Coffee.</h1>
      <p>
      That's It.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Shop Online
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
