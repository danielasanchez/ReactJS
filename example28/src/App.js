import 'bootstrap/dist/css/bootstrap.min.css';
//import Swal from 'sweetalert2'
import Banner from './Components/Banner';
import Header from './Components/Header';
import Ingredientes from './Components/Ingredientes';
import Productos from './Components/Productos';
import MateriasProvider from './Context/MateriasContext';

function App() {
  return (
    <MateriasProvider>
      <div className="App">

        <Header
          titulo={<h1>Mi cocina</h1>}
        />

        <Banner
          etiqueta={<i>All you need is love... and food</i>}
        />

        <div className="App-body">
          <Productos />
          <Ingredientes />
        </div>

        <Banner
          etiqueta={<h6>Copyright &copy; Todos los derechos reservados </h6>}
        />

      </div>
    </MateriasProvider>
  );
}

export default App;

