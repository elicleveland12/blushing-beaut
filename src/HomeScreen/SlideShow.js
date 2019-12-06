import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

function SlideShow() {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={require('../images/cupTwo.jpg')} width="200px" height="300px" alt="cup one"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={require('../images/cupThree.jpg')} width="200px" height="300px" alt="cup two"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={require('../images/cupFour.jpg')} width="200px" height="300px" alt="cup three"/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow;
