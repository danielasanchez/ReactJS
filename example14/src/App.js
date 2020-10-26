import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      matricula:"",
      nombre:"",
      correo:"",
      carrera:"",
    };
  }
  
  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      [e.target.name]: e.target.value 
      //nombre:e.target.value 
    });
  }
  

  enviar=(e)=>{
    e.preventDefault();

    const {matricula,nombre, correo, carrera} = this.state;
      
    const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 

    if(!vacios){
      alert(`Agregado ${nombre} de ${carrera}`);
    }
    else{
      alert("Llena todos los campos");
    }
    
  }
  
  render() {
    const { matricula, nombre,correo, carrera } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #14
          </p>
        </header>
        <div className="Containers">
          <div className="Form">
            <form onSubmit={this.enviar}>
            <div>
              <label htmlFor="matricula">Matricula</label>
              <input
                type="text"
                placeholder="Ejm. 18211154"
                onChange={this.guardarCambios}
                value={this.state.matricula}
                name="matricula"
              />
            </div>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                placeholder="Ejm. Juan Perez"
                onChange={this.guardarCambios}
                value={this.state.nombre}
                name="nombre"
              />
            </div>
            <div>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                placeholder="Ej. correo@correo.com"
                onChange={this.guardarCambios}
                value={this.state.correo}
                name="correo"
              />
            </div>
            <div>
              <label htmlFor="carrera">Carrera</label>
              <select name="carrera" value={this.state.carrera} onChange={this.guardarCambios}>
                <option value="selecciona">selecciona</option>
                <option value="Informatica">Informatica</option>
                <option value="Sistemas">Sistemas</option>
                <option value="TICS">TICS</option>
              </select>
            </div>
              <button>Enviar</button>
            </form>
          </div>
          <div className="List">
              <p>{matricula}</p>
              <p>{nombre}</p>
              <p>{correo}</p>
              <p>{carrera}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
