import './App.css';
import Encabezado from './Components/Encabezado';
import Buscador from './Components/Buscador';
import Listado from './Components/Listado';
import { useState } from 'react';


function App() {

  const [arreglo, setArreglo] = useState([]);
  const [total, setTotal]= useState(0);
  const [busqueda, setBusqueda] = useState(false);

  const buscar=(peli)=>{

    const apikey="" //<-- Your api key
    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${apikey}`

    fetch(api_url)
    .then(data => {
      return data.json()
    }).then(resultado=>{
          console.log(resultado);
          const {Search=[]} = resultado;

          setArreglo(Search);//arreglo:Search
          setTotal(Search.Length);//total:Search.Length
          setBusqueda(true);//busqueda:true
          
    });
  }

      
    return (
      <div className="App">
        <Encabezado/>
        <Buscador
          buscar={buscar}
        />
        <Listado
          total={total}
          arreglo={arreglo}
          busqueda={busqueda}
        />
      </div>
    );
}

export default App;
