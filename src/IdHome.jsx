import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";

function IdHome() {
  const { id } = useParams();
  const [city, setCity] = useState([]);

  const navigate = useNavigate();
  const goHome = () => navigate("*");

  const fetchData = async () => {
    await fetch(`http://localhost:3001/cities/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw Error(`is not ok: ` + resp.status);
        }
        return resp.json();
      })
      .then((data) => setCity(data))
      .catch((err) => {
        goHome();
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Card.Title>{city.city}</Card.Title>
      <br />
      <Card.Text>{city.description}</Card.Text>
      <Card.Text>{city.body}</Card.Text>
    </Container>
  );
}

export default IdHome;
