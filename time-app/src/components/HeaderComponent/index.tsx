import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

function HeaderComponent() {
  const [count, setCount] = useState(0);
  const [sinal, setSinal] = useState(false);

  function Counting() {
    setCount((count) => count + 1);

    if (count == 10) {
      setSinal(true);
      setCount(0);
    } else {
      setSinal(false);
    }
  }

  function AlertSuccess() {
    if (count <= 4) {
      return <Alert className="alert-primary">Contando... {count}</Alert>;
    } 
    
    else if (count <= 9) {
      return (
        <Alert className="alert-warning">
          Já ta chegando no objetivo... {count}
        </Alert>
      );
    } 
    
    else if (count >= 10) {
      return (
        <Alert className="alert-success">
          Show, chegou a 10, agora vou resetar o contador
        </Alert>
      );
    }
  }
  
  return (
    <Container fluid>
      <Row>
        <Col md={1} className={count == 10 ? "bg-success" : "bg-primary"}>
          <h3> {count}</h3>
        </Col>

        <Col md={10}>
          <h1>
            React Bootstrap, vezes {count} {AlertSuccess()}
          </h1>
          <Button className="btn-danger" onClick={Counting}>
            Clique em Mim
          </Button>
        </Col>

        <Col md={1} className={count == 10 ? "bg-success" : "bg-primary"}>
          <h3>{count}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderComponent;
