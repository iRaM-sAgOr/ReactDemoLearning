import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/navBar/navbar"
import RouteComponent from "./components/RouteComponent/routeComponent"
import FooterComponent from "./components/FooterComponent/footerComponent"

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <RouteComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
