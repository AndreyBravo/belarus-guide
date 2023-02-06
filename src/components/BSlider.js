import { Carousel } from "react-bootstrap";
import React from "react";


export default function BSlider() {
  return (
    <Carousel >
      <Carousel.Item >
        <img className="d-block w-100" src="./assets/re4isa.jpg" />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/wild.jpg" />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./assets/mozor6.jpg" />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
