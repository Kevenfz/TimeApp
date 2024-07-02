import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import bg from '../../assets/Img/BgTimeApp.jpg'

function HomeComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={bg} fluid/>
          <h1>teste</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
