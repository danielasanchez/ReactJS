import '../App.css';
import {useContext} from 'react';
import {FirebaseContext} from '../Context/FirebaseContext'

const Formulario = () => {
    const {alumno, desactivado, enviar, guardarCambios} = useContext(FirebaseContext);
    return ( 
        <div className="Form">
        <form onSubmit={enviar}>
        <div>
          <label htmlFor="matricula">Matricula</label>
          <input
            type="text"
            placeholder="Ejm. 18211154"
            onChange={guardarCambios}
            value={alumno.matricula}
            name="matricula"
            disabled={desactivado}
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            placeholder="Ejm. Juan Perez"
            onChange={guardarCambios}
            value={alumno.nombre}
            name="nombre"
          />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            placeholder="Ej. correo@correo.com"
            onChange={guardarCambios}
            value={alumno.correo}
            name="correo"
          />
        </div>
        <div>
          <label htmlFor="carrera">Carrera</label>
          <select name="carrera" value={alumno.carrera} onChange={guardarCambios}>
            <option value="selecciona">selecciona</option>
            <option value="Informatica">Informatica</option>
            <option value="Sistemas">Sistemas</option>
            <option value="TICS">TICS</option>
          </select>
        </div>
        <button>Enviar</button>
        </form>
      </div>
    );
}
 
export default Formulario;