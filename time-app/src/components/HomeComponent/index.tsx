import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import "./style.css";

function HomeComponent({ prev }) {
  console.log(prev.main);
  
  const bgTempo = () => {
    switch(prev.mainTemp) {
      case 'Clear':
        return 'ensolarado';
        
        case 'Rain':
          return 'chuva-leve';

          case 'Thunderstorm':
            return 'tempestade';
          
            case 'Heavy Rain':
            return 'chuva-forte';
          
            case 'Clouds':
            return 'nublado';
            
            case 'Mist':
            return 'nevoeiro';

            default:
              return 'Nada';

    }
  }

  return (
    <Container className="w-75 h-75 p-3">
      <Row>
        <Col className="d-flex justify-content-center h-100">
          {prev.cidade ? (
            <div className={`container-md rounded-3 d-flex justify-content-center p-3 rounded img-fluid ${bgTempo()}`}>
              
              <div className=" d-flex flex-wrap justify-content-center align-items-center bg-black.bg-gradient p-2 text-white bg-opacity-25 w-100 h-100 shadow p-3 mb-5 bg-body-tertiary rounded">
                <h1>{prev.cidade}</h1>
                <h2>{`${parseInt(prev.temperatura)}°C`}</h2>
                <h3>{prev.pais}</h3>
                <h4>{prev.descricao}</h4>
                <Image src={prev.icon}></Image>
                <p>{`Máxima: ${parseInt(prev.tempMax)}°C`}</p>
                <p>{`Mínima: ${parseInt(prev.tempMin)}°C`}</p>
                <p>{`Humidade: ${prev.humidade} %`}</p>
                <p>{`Nível do mar: ${prev.nivelMar} m`}</p>
                <p>{`Longitude: ${prev.long}, Latitude: ${prev.lat}`}</p>
              </div>
            </div>

          ) : (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded">
              <div className="mh-75">
                <p className="align-text-center">Nenhuma previsão disponível, faça uma busca.</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
