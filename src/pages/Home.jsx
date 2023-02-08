import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const sortArray = ["region", "city"];

  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(() => {
    const saved = localStorage.getItem("sorted");
    let initialValue = JSON.parse(saved);
    if (initialValue === "Выбирите из меню") initialValue = "";
    return initialValue || "";
  });

  const fetchData = async () => {
    await fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("sorted", JSON.stringify(sort));
  }, [sort]);

  const listItems = cities.map((city) => (
    <Col key={city.id} style={{ marginTop: "20px" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={city.image} />
        <Card.Body>
          <Card.Title>{city.city}</Card.Title>
          <Card.Text>{city.description}</Card.Text>
          <Link to={`/home/${city.id}`}>Подробнее</Link>
        </Card.Body>
      </Card>
    </Col>
  ));

  const sortItems = sortArray.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
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

  const onSort = async (e) => {
    const val = e.target.value;
    setSort(val);
    await fetch(`http://localhost:3001/cities?_sort=${val}`)
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
        <Form.Label>Сортировка</Form.Label>
        <Form.Select onChange={onSort} value={sort}>
          <option>Выбирите из меню</option>
          {sortItems}
        </Form.Select>
        {cities.length === 0 ? (
          <Row>
            <h2>Нет элементов</h2>
          </Row>
        ) : (
          <Row>{listItems}</Row>
        )}
      </Container>
    </>
  );
}

export default Home;
