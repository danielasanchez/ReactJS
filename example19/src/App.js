import './App.css';
import Encabezado from './Components/Encabezado';
import Buscador from './Components/Buscador';
import Listado from './Components/Listado';
import { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arreglo: [],
      total: 0,
      busqueda: false
    }
  }

  buscar = (peli) => {
    const apikey = "" //<-- Your api key
    const api_url = `http://www.omdbapi.com/?s=${peli}&apikey=${apikey}`

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado => {
        console.log(resultado);
        const { Search = [] } = resultado;
        this.setState({
          total: Search.length,
          arreglo: Search,
          busqueda: true
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Encabezado />
        <Buscador
          buscar={this.buscar}
        />
        <Listado
          total={this.state.total}
          arreglo={this.state.arreglo}
          busqueda={this.state.busqueda}
        />
      </div>
    )
  };
}

export default App;


// function App() {

//   const [arreglo, setArreglo] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [busqueda, setBusqueda] = useState(false);


//   const buscar = (peli) => {
//     const apikey = "" //<-- Your api key
//     const api_url = `http://www.omdbapi.com/?s=${peli}&apikey=${apikey}`

//     fetch(api_url)
//       .then(data => {
//         return data.json()
//       }).then(resultado => {
//         console.log(resultado);
//         const { Search = [] } = resultado;

//         setTotal(Search.length);
//         setArreglo(Search);
//         setBusqueda(true);

//       });
//   }


//   return (
//     <div className="App">
//       <Encabezado />
//       <Buscador
//         buscar={buscar}
//       />
//       <Listado
//         total={total}
//         arreglo={arreglo}
//         busqueda={busqueda}
//       />
//     </div>
//   );

// }

// export default App;