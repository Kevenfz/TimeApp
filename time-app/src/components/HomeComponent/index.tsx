import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
function HomeComponent({ prev }) {

  return (
    <Container>
      <Row>
        <Col>
          {prev.cidade ? (
            <div>
              <h1>{prev.cidade}</h1>
              <h2>{prev.temperatura}</h2>
              <h3>{prev.pais}</h3>
              <h4>{prev.descricao}</h4>
              <Image src={prev.icon}></Image>
            </div>
          ) : (
              <p>Nenhuma previsão disponível, Faça uma busca.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
