import './App.css';
import React, { useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import FirebaseProvider from './Context/FirebaseContext';

function App() {
    return (
      <FirebaseProvider>
        <div className="App">
          <Header/>
          <div className="Containers">
            <Formulario/>
            <Listado/>
          </div>
        </div>
      </FirebaseProvider>
    )
  
}

export default App;
