import React, { FormEvent, useEffect, useState } from "react";
import { Cidades } from "../../assets/services/cidades";
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
function HeaderComponent({ onData }) {
  const [cidade, setCidade] = useState("");
  const [weatherData1, setWeatherData1] = useState({
    temperatura: "",
    tempMin:"",
    tempMax:"",
    humidade:"",
    nivelMar:"",
    cidade: "",
    pais: "",
    descricao: "",
    icon: "",
    long:"",
    lat:"",
    main:"",
  });


  const currentValue = () => {
    const data1 = document.querySelector("input[name=searchInput]").value;
    setCidade(data1);
  }

  const searchInput = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cidade) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=0ec83eb50ebad909439b0e06ad5e1532`);
        const data = await response.json();
        console.log(data);

        const icone = `http://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;

        const datePrev = {
          temperatura: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          humidade: data.main.humidity,
          nivelMar: data.main.sea_level,
          cidade: data.name,
          pais: data.sys.country,
          descricao: data.weather[0]["description"],
          icon: icone,
          long: data.coord.lon,
          lat: data.coord.lat,
          mainTemp: data.weather[0]["main"],
        };
        
        console.log(datePrev.mainTemp);
        
        onData(datePrev);

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }

    }

  };

  
  return (
    <>
      <Container className="container_body">

        <Navbar expand="lg">

          <Container fluid>

            <Navbar.Brand>Time APP</Navbar.Brand>
            {/* <Image src={Logo} /> */}

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="me-auto my-3 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form
                onSubmit={searchInput}
                className="d-flex d-flex align-items-center my-2"
              >
                <Form.Label className="d-flex align-items-center me-5">

                </Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Digite a cidade..."
                  className="me-2 shadow-sm bg-body-tertiary rounded"
                  aria-label="Search"
                  name="searchInput"
                />

                <Button
                  type="submit"
                  onClick={currentValue}
                  variant="outline-success"
                // className="shadow-sm bg-body-tertiary rounded"
                >
                  Busca
                </Button>

              </Form>

            </Navbar.Collapse>

          </Container>

        </Navbar>

      </Container>
    </>
  );
}

export default HeaderComponent;
