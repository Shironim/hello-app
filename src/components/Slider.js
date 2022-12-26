import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="light" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='p-1'>
        <img
          className="d-block w-100"
          src="/images/slider1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='p-1'>
        <img
          className="d-block w-100"
          src="/images/slider1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='p-1'>
        <img
          className="d-block w-100"
          src="/images/slider1.png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;