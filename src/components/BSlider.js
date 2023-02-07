import { Carousel } from "react-bootstrap";
import React from "react";

export default function BSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "94.3vh" }}
          className="d-block w-100"
          src="./assets/first.jpg"
        />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "94.3vh" }}
          className="d-block w-100"
          src="./assets/wild.jpg"
        />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "94.3vh" }}
          className="d-block w-100"
          src="./assets/mozor6.jpg"
        />
        <Carousel.Caption>
          <h3>Ветка</h3>
          <p>Что интересного</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
