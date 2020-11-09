import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = (props) => {
    return ( 
        <div className="List">
        {
                    
            props.lista.length===0   
            ? <p>No hay alumnos</p>
            : 
        
             <Table striped bordered hover>
            <thead>
              <tr>
                <th>Matricula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Carrera</th>
                <th></th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.lista.map((a,index)=>
                <tr key={index}>
                    <td>{a.matricula}</td>
                    <td>{a.nombre}</td>
                    <td>{a.correo}</td>
                    <td>{a.carrera}</td>
                    <td><Button onClick={()=>props.eliminar(a.matricula)} variant="danger">Eliminar</Button></td>
                    <td><Button onClick={()=>props.modificar(a.matricula)}variant="success">Modificar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          }

          </div>
     );
}
 
export default Listado;