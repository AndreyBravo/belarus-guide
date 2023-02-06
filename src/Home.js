import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import vetka from "./assets/Vetka.jpg";

function Home() {
  return (
    <>
      <Container style={{paddingTop: '2rem'}}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={vetka} />
              <Card.Body>
                <Card.Title>Ветка</Card.Title>
                <Card.Text>Допольнительно узнать можно</Card.Text>
                <Button  variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={vetka} />
              <Card.Body>
                <Card.Title>Ветка</Card.Title>
                <Card.Text>Допольнительно узнать можно</Card.Text>
                <Button  variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={vetka} />
              <Card.Body>
                <Card.Title>Ветка</Card.Title>
                <Card.Text>Допольнительно узнать можно</Card.Text>
                <Button  variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
