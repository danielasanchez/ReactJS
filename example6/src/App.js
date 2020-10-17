import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  mifuncion1(){
    console.log("Hola desde funcion #1")
  }
  mifuncion2(){
    console.log("Hola desde funcion #2")
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example #6
        </p>
      </header>
      <div className="App-body">
        <Button variant="primary" onClick={()=>this.mifuncion1()}>Boton #1</Button>
        <Button variant="primary" onClick={()=>this.mifuncion2()}>Boton #2</Button>
      </div>
    </div>
  )};
}

export default App;
