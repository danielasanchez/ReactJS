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
      {id:1, clave:"Q1",descripcion:"aceite",stock:10,unidad:"cda"},
      {id:2, clave:"Q2",descripcion:"huevo",stock:12,unidad:"pieza"},
      {id:3, clave:"Q3",descripcion:"jamon",stock:25,unidad:"rebanada"},

    ],
    ingredientes:[]
  }

  agregar=(p)=>{
    //let existe = this.state.ingredientes.find((a,i)=>a.clave===p.clave)
    let ingredienteTemp={
      id:p.id,
      clave:p.clave,
      descripcion:p.descripcion,
      unidad:p.unidad
    }

    let productoTemp={
      ...p,
      stock:p.stock-1
    }

    let temporal = this.state.productos.filter((pr,i)=>pr.id!==p.id);
    temporal=[...temporal,productoTemp].sort((a,b)=>a.id-b.id);



    this.setState({
      productos:temporal,
      ingredientes:[...this.state.ingredientes,ingredienteTemp]
    })

  }

  eliminar=(p,i)=>{
    let temporal = this.state.ingredientes.filter((elemento,index)=>index!==i);  

    let pTemp = this.state.productos.find((pr,i)=>pr.id===p.id);
    
    let copia={
      ...pTemp,
      stock:pTemp.stock+1
    }

    let productosTemp = this.state.productos.filter((pr,i)=>pr.id!==p.id)
    productosTemp=[...productosTemp,copia].sort((a,b)=>a.id-b.id)



    //console.log(pTemp)
    this.setState({
      productos:productosTemp,
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

