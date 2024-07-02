import React from "react";
import "./style.css";
import {
  Container,
  Button,
  Nav,
  Form,
  Navbar,
  Image,
  Figure,
} from "react-bootstrap";

// Componente de busca
function HeaderComponent() {
  return (
    <Container className="container_body">
      <Navbar expand="lg"  >
        <Container fluid>
        <Navbar.Brand>Time APP</Navbar.Brand>
        <Image src="../"/>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquise sua cidade..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Busca</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HeaderComponent;
