//yarn add react-router-dom
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './Pages/Detalle';
import Home from './Pages/Home';
import Informacion from './Pages/Informacion';
import Contacto from './Pages/Contacto'
import Encabezado from './Components/Encabezado';
import NavBar from './Components/NavBar';
import { Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Encabezado />
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<Detalle />} />
        <Route path='/informacion' element={<Informacion/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );

}
//en path indican que ruta quieren que se vea en la url
//utilizamos path="*"... para indicar que cualquier ruta que ponga el usuario
//y que no tengamos establecida lo mande a la pagina principal.
//en  path='/detalle/:id' el "id" se va a sustituir por el id de la pelicula
export default App;