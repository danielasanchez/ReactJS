import React from 'react';
import './App.css';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <Body
        
        numero={100}
        booleano={false}
        arreglo={[1,2,3,4,5]}
        funcion={(num)=>num*2}
        objeto={{nombre:"Daniela", apellido:"Sánchez"}}
        etiqueta={<h3>Hola esta es una etiqueta</h3>}
      />
    </div>
  );
}

export default App;
