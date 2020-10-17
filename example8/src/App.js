import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App(){
  return (
    <div className="App">
        <Header
          titulo="Ejemplo #"
          numero={8}
        />
        <Body
          texto1="Texto aqui"
          texto2="Otro texto aqui"
        />
        <Footer
          pie={<p>Copyright &copy; Todos los derechos reservados </p>}
        />
    </div>
  );
}

export default App;
