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
    <Container fluid="md">

          {prev.cidade ? (   
            <Container fluid="md" className={`d-flex justify-content-center ${bgTempo()} p-2 rounded card-custom-type`} style={{maxWidth: "700px"}}>

              <Row className=" d-flex justify-content-center align-items-center text-white p-2 w-100 h-100 bg-dark opacity-50 shadow-lg rounded">
                <Col sm={12}>
                  <div className="divPrev">
                    <p className="title-custom">Resultado de,</p>
                    <h4>{prev.cidade}</h4>
                    <span >{prev.pais}</span>
                  </div>
                </Col>

                <Row>
                  <Col sm={12} className="sideA mt-4 p-0">
                      <Stack className="d-flex justify-content-center align-items-center" gap={2} direction="horizontal">
                        <Image className="logo" src={prev.icon}></Image>
                        <h2>{`${parseInt(prev.temperatura)}°C`}</h2>
                      </Stack>

                    <h4 className="text-center">{prev.descricao}</h4>

                    <Stack gap={2} direction="horizontal" className="d-flex justify-content-center align-items-center p-custom">
                      <p>{`Máxima: ${parseInt(prev.tempMax)}°C`}</p>
                      <p>{`Mínima: ${parseInt(prev.tempMin)}°C`}</p>
                    </Stack>

                  </Col>

                  <Col sm={12} className="sideB mt-4 p-0">
                    <div className="d-flex flex-column justify-content-center align-items-center p-custom">
                      <p>{`Humidade: ${prev.humidade} %`}</p>
                      <p>{`Nível do mar: ${prev.nivelMar} m`}</p>

                      <Stack gap={3} direction="horizontal" className="d-flex justify-content-center align-items-center p-custom">
                        <p>{`Longitude: ${prev.long}`}</p>
                        <p>{`Latitude: ${prev.lat}`}</p>
                      </Stack>
                    </div>
                  </Col>
                </Row>

              </Row>
            </Container>

          ) : (
            <div className="container-sm rounded-3 d-flex justify-content-center p-3 shadow-lg p3 mb-5 bg-body rounded w-50 h-25">
              <div className="text-custom">
                <p >Nenhuma previsão disponível, faça uma busca.</p>
              </div>
            </div>
          )}
    </Container>
  );
}

export default HomeComponent;
