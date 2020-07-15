import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from "./components/parent2child_default/parentComponent/parentComponent"
import ParentComponent2 from "./components/access_child_method_from_parent/parentComponent"

function App() {
  return (
    <div className="App">
      <h1 style={{"backgroundColor":"red"}}>This is for data and fuction pass as props to child from parent</h1>
      <ParentComponent/>
      <hr></hr>
      <h1 style={{"backgroundColor":"red"}}>This is to access the child method from parent component with data</h1>
      <ParentComponent2/>
    </div>
  );
}

export default App;
