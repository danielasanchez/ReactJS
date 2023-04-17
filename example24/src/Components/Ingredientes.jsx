import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Ingredientes = (props) => {

    return (  
      <div style={{paddingTop: "5vh"}}>

        {
          props.ingredientes.length===0
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
                    props.ingredientes.map((p,i)=>
                    <tr key={i}>
                      <td>{p.clave}</td>
                      <td>{p.descripcion}</td>
                      <td>{p.unidad}</td>
                      <td><Button onClick={()=>props.eliminar(p,i)} variant="danger">-</Button></td>
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