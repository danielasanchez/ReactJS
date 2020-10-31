import './App.css';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';

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
        <Header/>
        <div className="Containers">
          <Formulario
              enviar={this.enviar}
              guardarCambios={this.guardarCambios}
              alumno={this.state.alumno}
              desactivado={this.state.desactivado}
          />
          <Listado
            lista={this.state.lista}
            eliminar={this.eliminar}
            modificar={this.modificar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
