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
      {id:1, clave:"Q1",descripcion:"aceite",stock:10,precio:15,unidad:"cda"},
      {id:2, clave:"Q2",descripcion:"huevo",stock:12,precio:5,unidad:"pieza"},
      {id:3, clave:"Q3",descripcion:"jamon",stock:25,precio:10,unidad:"rebanada"},
    ],
    ingredientes:[],
    total:0
  }

  agregar=(p)=>{
    let existe = this.state.ingredientes.find((a,i)=>a.clave===p.clave)
    let ingredienteTemp;

    if(!existe){
      ingredienteTemp={
        id:p.id,
        clave:p.clave,
        descripcion:p.descripcion,
        precio:p.precio,
        cantidad:1,
        importe:p.precio*1,
        unidad:p.unidad
      }
    }else{
      ingredienteTemp={
        id:existe.id,
        clave:existe.clave,
        descripcion:existe.descripcion,
        precio:existe.precio,
        cantidad:existe.cantidad+1,
        importe:existe.precio*(existe.cantidad+1),
        unidad:existe.unidad
      }


    }


    let productoTemp={
      ...p,
      stock:p.stock-1
    }

    let temporal = this.state.productos.filter((pr,i)=>pr.id!==p.id);
    temporal=[...temporal,productoTemp].sort((a,b)=>a.id-b.id);
    
    let tempIngredientes = this.state.ingredientes.filter((pr,i)=>pr.id!==p.id);
    let ingredientesTemp=[...tempIngredientes,ingredienteTemp].sort((a,b)=>a.id-b.id);
    let total = ingredientesTemp.reduce((suma,prod)=>{
      return suma+prod.importe
    },0)

    this.setState({
      productos:temporal,
      ingredientes:ingredientesTemp,
      total//total:total
    })

  }

  eliminar=(p,i)=>{
    let existe = this.state.ingredientes.find((a,i)=>a.clave===p.clave)
    let temporal = this.state.ingredientes.filter((elemento,index)=>elemento.id!==p.id);
      
    existe={
      ...existe,
      cantidad:existe.cantidad-1,
      importe:existe.precio*(existe.cantidad-1)
    }
    
    //actualizar el stock
    let pTemp = this.state.productos.find((pr,i)=>pr.id===p.id);
    let copia={
      ...pTemp,
      stock:pTemp.stock+1
    }

    let productosTemp = this.state.productos.filter((pr,i)=>pr.id!==p.id)
    productosTemp=[...productosTemp,copia].sort((a,b)=>a.id-b.id)

    //actualizar si se cumple la condicion el temporal (state ingredientes)
    if(existe.cantidad!==0){
      temporal=[...temporal,existe].sort((a,b)=>a.id-b.id)
    }


    let total = temporal.reduce((suma,prod)=>{
      return suma+prod.importe
    },0)


    //console.log(pTemp)
    this.setState({
      productos:productosTemp,
      ingredientes:temporal,
      total
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
          total={this.state.total}
        />

      </div>

      <Banner
        etiqueta={<h6>Copyright &copy; Todos los derechos reservados </h6>}
      />

      
    </div>
    
  );}
}

export default App;

