import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Productos = (props) => {

  const verificar=(p)=>{
    let temp= props.ingredientes.find((a,i)=>a.id===p.id)
    return temp;
  }
  

  return (  
      <div style={{paddingTop: "5vh"}}>
          <h1>Productos</h1>
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
                props.productos.map((p,i)=>
                <tr key={i}>
                  <td>{p.clave}</td>
                  <td>{p.descripcion}</td>
                  <td>{p.unidad}</td>
                  <td><Button disabled={verificar(p)} onClick={()=>props.agregar(p)} variant="success">+</Button></td>
                </tr>
                )
              }

            </tbody>
          </Table>
        
      </div>
    );
}
 
export default Productos;