import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Swal from 'sweetalert2'
import Banner from './Components/Banner';
import Header from './Components/Header';
import Ingredientes from './Components/Ingredientes';
import Productos from './Components/Productos';



class App extends Component{
  state={
    productos:[
      {id:1, clave:"Q1",descripcion:"aceite",unidad:"1 cda"},
      {id:2, clave:"Q2",descripcion:"huevo",unidad:"1 pieza"},
      {id:3, clave:"Q3",descripcion:"jamon",unidad:"1/4 kilo"},

    ],
    ingredientes:[]
  }

  agregar=(p)=>{
    //let existe = this.state.ingredientes.find((a,i)=>a.clave===p.clave)

    this.setState({
      ingredientes:[...this.state.ingredientes,p]
    })

  }

  eliminar=(p,i)=>{
    let temporal = this.state.ingredientes.filter((elemento,index)=>index!==i);  
    this.setState({
      ingredientes:temporal
    })  
  }
  

  render(){
  return (
    <div className="App">
      
      <Header
        titulo={<h1>Mi cocina</h1>}
      />
      
      <Banner
        etiqueta={<i>All you need is love... and food</i>}
      />
      
      
      <div className="App-body">

        <Productos
          productos={this.state.productos}
          agregar={this.agregar}
          ingredientes={this.state.ingredientes}
       
        
        />

        <Ingredientes
          ingredientes={this.state.ingredientes}
          eliminar={this.eliminar}
        />

      </div>

      <Banner
        etiqueta={<h6>Copyright &copy; Todos los derechos reservados </h6>}
      />

      
    </div>
    
  );}
}

export default App;

