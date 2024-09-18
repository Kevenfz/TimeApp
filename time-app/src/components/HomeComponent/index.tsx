import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import "./style.css";

function HomeComponent({ prev }) {
  return (
    <Container className="h-75 w-50 p-3">
      <Row>
        <Col className="d-flex justify-content-center">
          {prev.cidade ? (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded">
              <div className="custom-card-main">
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
                <p>Nenhuma previsão disponível, faça uma busca.</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
