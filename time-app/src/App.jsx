import React, { useCallback, useState } from "react";
import HeaderComponent from "./components/HeaderComponent/index";
import HomeComponent from "./components/HomeComponent";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../time-app/src/App.css";

function App() {
  const [prev, setPrev] = useState({
    temperatura: "",
    cidade: "",
    pais: "",
    descricao: "",
    icon: "",
  });
  
  const updateWeatherData = (data) => {
    setPrev(data);
  }

  return (
    <>
      <HeaderComponent onData={updateWeatherData} />
      <HomeComponent prev={prev}/>
    </>
  );
}

export default App;
