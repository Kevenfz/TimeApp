import React, { useEffect, useState } from "react";
import { Col, Container, Image, Navbar, Row, Stack } from "react-bootstrap";
import "./style.css";

function HomeComponent({ prev }) {
  console.log(prev.main);

  const bgTempo = () => {
    switch (prev.mainTemp) {
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
    <Container className="w-50 mt-2">
      <Row>
        <Col className="d-flex justify-content-center p-2 card-custom-type">
          {prev.cidade ? (
            <Container className={`container-md rounded-3 vh-75 wh-75 d-flex justify-content-center p-3 rounded img-fluid ${bgTempo()} shadow-lg p-3 bg-body-tertiary rounded`}>

              <Row className=" d-flex justify-content-center align-items-center text-white bg-opacity-25 w-100 shadow-lg p-3 bg-body-tertiary rounded">
                <Col>
                  <div className="divPrev">
                    <h5 className="text-center">Resultado de,</h5>
                    <h3 >{prev.cidade}</h3>
                    <span >{prev.pais}</span>
                  </div>
                </Col>

                <Row className="d-flex justify-content-center align-items-center">
                  <Col className="sideA">
                      <Stack className="d-flex justify-content-center align-items-center" gap={2} direction="horizontal">
                        <Image className="logo" src={prev.icon}></Image>
                        <h2>{`${parseInt(prev.temperatura)}°C`}</h2>
                      </Stack>

                    <h4 className="text-center">{prev.descricao}</h4>

                    <Stack gap={3} direction="horizontal" className="d-flex justify-content-center align-items-center">
                      <p>{`Máxima: ${parseInt(prev.tempMax)}°C`}</p>
                      <p>{`Mínima: ${parseInt(prev.tempMin)}°C`}</p>
                    </Stack>

                  </Col>

                  <Col className="sideB">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <p>{`Humidade: ${prev.humidade} %`}</p>
                      <p>{`Nível do mar: ${prev.nivelMar} m`}</p>

                      <Stack gap={3} direction="horizontal" className="d-flex justify-content-center align-items-center">
                        <p>{`Longitude: ${prev.long}`}</p>
                        <p>{`Latitude: ${prev.lat}`}</p>
                      </Stack>
                    </div>
                  </Col>
                </Row>

              </Row>
            </Container>

          ) : (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded w-75 h-25">
              <div className="text-center-custom">
                <p >Nenhuma previsão disponível, faça uma busca.</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;
