import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
function HomeComponent({ prev }) {
  return (
    <Container>
      <Row>
        <Col>
          {prev.cidade ? (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded">
              <div className="mh-70">
                <h1>{prev.cidade}</h1>
                <h2>{prev.temperatura}</h2>
                <h3>{prev.pais}</h3>
                <h4>{prev.descricao}</h4>
                <Image src={prev.icon}></Image>
              </div>
            </div>
          ) : (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded">
              <div className="mh-70">
                <p>Nenhuma previsão disponível, Faça uma busca.</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
