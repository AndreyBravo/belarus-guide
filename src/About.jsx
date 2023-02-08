import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItems = events.map((city) => (
    <Col key={city.id} style={{ marginTop: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={city.image} />
        <Card.Body>
          <Card.Title>{city.date}</Card.Title>
          <Card.Title>{city.city}</Card.Title>
          <Card.Text>{city.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container style={{ paddingTop: "2rem" }}>
      {events.length === 0 ? (
        <Row>
          <h2>Нет элементов</h2>
        </Row>
      ) : (
        <Row>{listItems}</Row>
      )}
    </Container>
  );
}

export default About;
