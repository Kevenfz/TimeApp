import React from "react";
import HeaderComponent from "./components/HeaderComponent/index";
import HomeComponent from "./components/HomeComponent";
import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <HeaderComponent />
      <HomeComponent />
    </>
  );
}

export default App;
