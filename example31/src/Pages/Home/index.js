import { useState } from 'react';
import Buscador from "./Buscador";
import Listado from "./Listado";

const Home = (props) => {

  const [arreglo, setArreglo] = useState([]);
  const [total, setTotal] = useState(0);
  const [busqueda, setBusqueda] = useState(false);


  const buscar = (peli) => {
    const apikey = "" //<-- Your api key
    const api_url = `http://www.omdbapi.com/?s=${peli}&apikey=${apikey}`

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado => {
        //console.log(resultado);
        const { Search = [] } = resultado;

        setTotal(Search.length);
        setArreglo(Search);
        setBusqueda(true);

      });
  }

  return (
    <>
      <Buscador
        buscar={buscar}
      />
      <Listado
        total={total}
        arreglo={arreglo}
        busqueda={busqueda}
      />

    </>
  );
}

export default Home;