import { Carousel } from "react-bootstrap";
import React from "react";

import vetka from "../assets/wild.jpg";

export default function BSlider() {
  return (
    <Carousel >
      <Carousel.Item >
        <img className="d-block w-100" src={vetka} />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={vetka} />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={vetka} />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
