import './App.css';
import Encabezado from './Components/Encabezado';
import Buscador from './Components/Buscador';
import Listado from './Components/Listado';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      arreglo:[],
      total:0,
      busqueda:false
    }
  }

  buscar=(peli)=>{
    const apikey="" //<-- Your api key
    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${apikey}`

    fetch(api_url)
    .then(data => {
      return data.json()
    }).then(resultado=>{
          console.log(resultado);
          const {Search=[]} = resultado;
          this.setState({
            total:Search.length, 
            arreglo:Search,
            busqueda:true
          });
    });
  }

      

  render(){
    return (
      <div className="App">
        <Encabezado/>
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
