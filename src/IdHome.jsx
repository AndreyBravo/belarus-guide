import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

import { useParams } from "react-router-dom";

function IdHome() {
  const { id } = useParams();
  const [city, setCity] = useState([]);

  const fetchData = async () => {
    await fetch(`http://localhost:3001/cities/${id}`)
      .then((res) => res.json())
      .then((data) => setCity(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Card.Title>{city.city}</Card.Title>
      <br/>
      <Card.Text>{city.description}</Card.Text>
      <Card.Text>{city.body}</Card.Text>
    </Container>
  );
}

export default IdHome;
