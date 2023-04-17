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
              <h3>Total: ${(props.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Clave</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Importe</th>
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
                      <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                      <td>{p.cantidad}</td>
                      <td>${(p.importe).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
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