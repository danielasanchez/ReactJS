import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  conversion=(edad)=>{
    return edad*12;
  }
  decision=(edad)=>{
    const mensaje = edad>=18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
  }
  render(){
    const edad=18;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example #5
        </p>
      </header>
      <Fragment>
        <h1>{edad}</h1>
        <h1>{this.conversion(edad)} meses</h1>
        <h1>{ edad>=18 ? "Eres mayor de edad" : "Eres menor de edad"}</h1>
        <h1>{ this.decision(edad)}</h1>
        <h1>{ edad>=18 && "Eres mayor de edad"}</h1>
      </Fragment>
    </div>
  )};
}

export default App;
