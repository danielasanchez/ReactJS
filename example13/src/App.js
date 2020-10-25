import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
 constructor(){
   super()
   this.state={
    contador:0,
    nombres:[]
  }
  console.log("Hola desde constructor");
 }
 componentDidMount(){  
  console.log("Hola desde componentDidMount");
 }
 componentWillUnmount(){  
  console.log("Hola desde componentWillUnmount");
 }
  mifuncion1(){
    this.setState({
      ...this.state,
      contador:this.state.contador+1
    })
    console.log("Hola desde funcion #1")
  }
  
  render(){
    console.log("Hola desde render");
    const {contador}= this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example #13
        </p> 
      </header>
      <div className="App-body">
        <p>{contador}</p>
        <Button variant="primary" onClick={()=>this.mifuncion1()}>Sumar</Button>
      </div>
    </div>
  )};
}

export default App;
