import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      alumno:{
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      },
      lista:[],
      desactivado:false,
    };
  }
  
  guardarCambios=(e)=>{
    this.setState({ 
      ...this.state,
      alumno:{
      ...this.state.alumno,  
      [e.target.name]: e.target.value
      } 
      //nombre:e.target.value 
    });
  }
  
  eliminar=(id)=>{
    const temporal = this.state.lista.filter(a=>a.matricula!==id)
    this.setState({
      ...this.state,
      lista:temporal
    })
  }

  modificar=(id)=>{
    const temporal = this.state.lista.find(a=>a.matricula===id);
    this.setState({
      ...this.state,
      alumno:{
        matricula:temporal.matricula,
        nombre:temporal.nombre,
        correo:temporal.correo,
        carrera:temporal.carrera
      },
      desactivado:true
    })
  }
  enviar=(e)=>{
    e.preventDefault();

    const {matricula,nombre, correo, carrera} = this.state.alumno;
      
    const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 

    if(!vacios){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Alumno agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
      let temporal = this.state.lista;

      if(this.state.desactivado===true){
        temporal= temporal.filter(a=>a.matricula!==matricula)
      }

      this.setState({
        ...this.state,
        lista:[...temporal,this.state.alumno],
        alumno:{
          matricula:"",
          nombre:"",
          correo:"",
          carrera:""
        },
        desactivado:false
      })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #15
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
                value={this.state.alumno.matricula}
                name="matricula"
                disabled={this.state.desactivado}
              />
            </div>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                placeholder="Ejm. Juan Perez"
                onChange={this.guardarCambios}
                value={this.state.alumno.nombre}
                name="nombre"
              />
            </div>
            <div>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                placeholder="Ej. correo@correo.com"
                onChange={this.guardarCambios}
                value={this.state.alumno.correo}
                name="correo"
              />
            </div>
            <div>
              <label htmlFor="carrera">Carrera</label>
              <select name="carrera" value={this.state.alumno.carrera} onChange={this.guardarCambios}>
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

            {
            
            this.state.lista.length===0   
            ? <p>No hay alumnos</p>
            : 

             <Table striped bordered hover>
            <thead>
              <tr>
                <th>Matricula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Carrera</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              this.state.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.matricula}</td>
                    <td>{a.nombre}</td>
                    <td>{a.correo}</td>
                    <td>{a.carrera}</td>
                    <td><Button onClick={()=>this.eliminar(a.matricula)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>this.modificar(a.matricula)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }
         
          </div>
        </div>
      </div>
    )
  }
}

export default App;
