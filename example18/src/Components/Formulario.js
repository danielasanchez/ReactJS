import '../App.css';

const Formulario = (props) => {
    return (
        <div className="Form">
            <form onSubmit={props.enviar}>
                <div>
                    <label htmlFor="matricula">Matricula</label>
                    <input
                        type="text"
                        placeholder="Ejm. 18211154"
                        onChange={props.guardarCambios}
                        value={props.alumno.matricula}
                        name="matricula"
                        disabled={props.desactivado}
                    />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        placeholder="Ejm. Juan Perez"
                        onChange={props.guardarCambios}
                        value={props.alumno.nombre}
                        name="nombre"
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        placeholder="Ej. correo@correo.com"
                        onChange={props.guardarCambios}
                        value={props.alumno.correo}
                        name="correo"
                    />
                </div>
                <div>
                    <label htmlFor="carrera">Carrera</label>
                    <select name="carrera" value={props.alumno.carrera} onChange={props.guardarCambios}>
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