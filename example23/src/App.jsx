import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Horario from './Components/Horario';
import Materias from './Components/Materias';

class App extends Component{
  state={
    horario:[],
    materias:[
      {
       id:1,
       clave:"AEB-1011",
       nombre:"Desarrollo de aplicaciones móviles",
       hora:"18:00-17:00",
       grupo:"C7A"
      },
      {
        id:2,
        clave:"AEB-1055",
        nombre:"Programación web",
        hora:"14:00-15:00",
        grupo:"C7A"
      },
      {
        id:3,
        clave:"SCD-1016",
        nombre:"Lenguajes y Autómatas 2",
        hora:"16:00-17:00",
        grupo:"C7A"
      },
      {
        id:4,
        clave:"ACA-0909",
        nombre:"Taller de investigación I",
        hora:"13:00-14:00",
        grupo:"C7A"
      },

      {
        id:5,
        clave:"AEB-1011",
        nombre:"Desarrollo de aplicaciones móviles",
        hora:"16:00-17:00",
        grupo:"C7B"
       },
       {
         id:6,
         clave:"AEB-1055",
         nombre:"Programación web",
         hora:"17:00-18:00",
         grupo:"C7B"
       },

      {
        id:7,
        clave:"SCD-1016",
        nombre:"Lenguajes y Autómatas 2",
        hora:"15:00-16:00",
        grupo:"C7B"
      },

      {
        id:8,
        clave:"ACA-0909",
        nombre:"Taller de investigación I",
        hora:"14:00-15:00",
        grupo:"C7B"
      },


    ]
  }


  agregar=(materia)=>{

    let existe = this.state.horario.find((a,i)=>a.clave===materia.clave)
    let misma = this.state.horario.find((a,i)=>a.hora===materia.hora)
    
    if (existe){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Esa materia ya la elegiste en otro grupo',
        showConfirmButton: false,
        timer: 2500
      })
      return;

    }
    else if (misma){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ya tienes una materia a esa hora',
        showConfirmButton: false,
        timer: 2500
      })
      return;

    }else{
      let temporal= this.state.horario

      this.setState({
        horario:[...temporal,materia]
      });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Materia agregada',
        showConfirmButton: false,
        timer: 1500
      })


    }
   




  }

  eliminar=(materia)=>{
    let temporal = this.state.horario.filter((a,i)=>a.id!==materia.id)

    this.setState({
      horario:temporal,


  });



    
  }
  

  
  
  render(){
  return (
    <div className="App">
      <Header/>
      <Footer
        etiqueta={<i>Por una Juventud Integrada al Desarrollo de México</i>}
      />
      <div className="App-body">
        <Materias
          materias={this.state.materias}
          agregar={this.agregar}
          horario={this.state.horario}
        />
 
       <Horario
          horario={this.state.horario}
          eliminar={this.eliminar}
        
        />
 
      
      </div>
      <Footer 
          etiqueta={<h6>Copyright &copy; Todos los derechos reservados </h6>}/>
    </div>
    
  );}
}

export default App;

/**
 * 
 * 
 * 
 * 
 * 
 *        <Horario
          materias={this.state.horarios}
          eliminar={this.eliminar}
          modificar={this.modificar}
        
        />

 */