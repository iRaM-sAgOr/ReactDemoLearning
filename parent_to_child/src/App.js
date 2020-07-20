import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from "./components/parent2child_default/parentComponent/parentComponent"
import ParentComponent2 from "./components/access_child_method_from_parent/parentComponent"
import BodyComponent from "./components/ErrorBoundary/BodyComponent"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundaryComponent"
import ClickComponent from "./components/HigherOrderComponent/clickCounter"
import HoverComonent from "./components/HigherOrderComponent/hoverCounter"

function App() {
  return (
    <div className="App">
      <h1 style={{ "backgroundColor": "red" }}>This is for data and fuction pass as props to child from parent</h1>
      <ParentComponent />
      <hr></hr>
      <h1 style={{ "backgroundColor": "red" }}>This is to access the child method from parent component with data</h1>
      <ParentComponent2 />
      <hr></hr>
      <h1 style={{ "backgroundColor": "red" }}>This is the part of learning Error Boundary handling</h1>
      {/* <ErrorBoundary>
        <BodyComponent />
      </ErrorBoundary> */}
      <hr></hr>
      <h1 style={{ "backgroundColor": "red" }}>This is for Higher Order Component</h1>
      <ClickComponent name="sagor"/>
      <br />
      <HoverComonent name="saykat"/>
    </div>
  );
}

export default App;
