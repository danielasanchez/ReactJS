import logo from '../logo.svg';
import '../App.css';

const Encabezado = () => {
    return ( 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Peliculas
        </p>
        </header>
  );
}
 
export default Encabezado;