import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import "./style.css";

function HomeComponent({ prev }) {
  const bgTempo = () => {
    switch(prev.descricao) {
      case 'Clear':
        return 'url(../../assets/Img/ensolarado.jpeg)';
        
        case 'Rain':
          return 'url(../../assets/Img/chuvaLeve.jpeg)';

          case 'Clouds':
            return 'url(../../assets/Img/nublado.jpeg)';

            default:
              return 'Nada';

    }
  }

  const cardPrev = {
    backgroundImage: bgTempo(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <Container className="h-75 w-50 p-3">
      <Row>
        <Col className="d-flex justify-content-center">
          {prev.cidade ? (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded" >
              <div className="custom-card-main" style={cardPrev}>
                <h1>{prev.cidade}</h1>
                <h2>{`${parseInt(prev.temperatura)}°C`}</h2>
                <h3>{prev.pais}</h3>
                <h4>{prev.descricao}</h4>
                <Image src={prev.icon}></Image>
                <p>{`Máxima: ${parseInt(prev.tempMax)}°C`}</p>
                <p>{`Mínima: ${parseInt(prev.tempMin)}°C`}</p>
                <p>{`Nível do mar: ${prev.nivelMar}`}</p>
                <p>{`Longitude: ${prev.long}, Latitude: ${prev.lat}`}</p>
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
