import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useContext} from 'react';
import {MateriasContext} from '../Context/MateriasContext'

const Ingredientes = () => {

    const {ingredientes, eliminar} = useContext(MateriasContext);

    return (  
      <div style={{paddingTop: "5vh"}}>

        {
          ingredientes.length===0
          ?
            <h1>No tienes ingredientes</h1>
          :
            <>
              <h1>Mis ingredientes</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Clave</th>
                    <th>Descripcion</th>
                    <th>Unidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {
                    ingredientes.map((p,i)=>
                    <tr key={i}>
                      <td>{p.clave}</td>
                      <td>{p.descripcion}</td>
                      <td>{p.unidad}</td>
                      <td><Button onClick={()=>eliminar(p)} variant="danger">-</Button></td>
                    </tr>
                    )
                  }

                </tbody>
              </Table>
            </>

        }

      </div>
    );
}
 
export default Ingredientes;