import React, { FormEvent, useEffect, useState } from "react";
import ToastNotification from "../Toast";
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
  Col,
  Stack,
} from "react-bootstrap";

// Componente de busca
function HeaderComponent({ onData }) {
  const [cidade, setCidade] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [weatherData1, setWeatherData1] = useState({
    temperatura: "",
    tempMin: "",
    tempMax: "",
    humidade: "",
    nivelMar: "",
    cidade: "",
    pais: "",
    descricao: "",
    icon: "",
    long: "",
    lat: "",
    main: "",
  });

  //Função de exibição do toast, inicialmente o state false
  const handleCloseToast = () => setShowToast(false);

  //Função que pega o valor do input "cidade" e atualiza o state
  const currentValue = () => {
    const data1 = document.querySelector("input[name=searchInput]").value;
    setCidade(data1);
  }

  //Função responsável por buscar os dados na API e atualizar o state da previsão do tempo
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
        setErrorMessage("Erro ao buscar cidade, pesquise novamente...");
        setShowToast(true);

        console.error('Erro ao buscar dados da API:', error.cod);

      }

    }

  };


  return (
    <>
      <Container className="container_body" >

        <Navbar expand="md" >

          <Stack className="d-flex justify-content-center align-items-center" gap={1}>

            <Image onClick={() => { window.location.reload() }} className="logo" src={'/Img/Logo/Logo1.png'} />
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="me-auto my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form
                onSubmit={searchInput}
                className="d-flex my-3"
              >
                <Form.Label>

                </Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Digite a cidade..."
                  className="me-2 shadow-sm bg-body-tertiary rounded w-100"
                  aria-label="Search"
                  name="searchInput"
                />

                <Button
                  type="submit"
                  onClick={currentValue}
                  variant="outline-success"
                >
                  Busca
                </Button>


              </Form>

            </Navbar.Collapse>

          </Stack>

        </Navbar>

        <ToastNotification
          show={showToast}
          message={errorMessage}
          handleClose={handleCloseToast} />

      </Container>
    </>
  );
}

export default HeaderComponent;
