import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

function Home() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const listItems = cities.map((city) => (
    <Col key={city.id} style={{ marginTop: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={city.image} />
        <Card.Body>
          <Card.Title>{city.city}</Card.Title>
          <Card.Text>{city.description}</Card.Text>
          <Button variant="primary">Подробнее</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  const onSearch = async (e) => {
    const val = e.target.value;
    setSearch(val);
    await fetch(`http://localhost:3001/cities?city_like=${val}`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Поиск</Form.Label>
          <Form.Control
            value={search}
            onChange={onSearch}
            placeholder="Поиск..."
          />
        </Form.Group>
        <Row>{listItems}</Row>
      </Container>
    </>
  );
}

export default Home;
