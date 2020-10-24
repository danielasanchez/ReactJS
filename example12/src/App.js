import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
 
  state={
    contador:0,
    nombres:[]
  }
  
  mifuncion1(){
    this.setState({
      ...this.state,
      contador:this.state.contador+1
    })
    console.log("Hola desde funcion #1")
  }
  mifuncion2(){
    this.setState({
      ...this.state,
      contador:this.state.contador-1
    })
    console.log("Hola desde funcion #2")
  }
  mifuncion3(){
    this.setState({
      ...this.state,
      contador:0
    })
    console.log("Hola desde funcion #3")
  }
  render(){
    const {contador}= this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example #12
        </p> 
      </header>
      <div className="App-body">
        <p>{contador}</p>
        <Button variant="primary" onClick={()=>this.mifuncion1()}>Sumar</Button>
        <Button variant="primary" onClick={()=>this.mifuncion2()}>Restar</Button>
        <Button variant="primary" onClick={()=>this.mifuncion3()}>Reiniciar</Button>
      </div>
    </div>
  )};
}

export default App;
