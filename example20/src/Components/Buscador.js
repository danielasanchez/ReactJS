import { InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Buscador = (props) => {
    return (  
        <div className="Buscador">
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">Buscador</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                onChange={(e)=>props.buscar(e.target.value)}
            />
            </InputGroup>
        </div>
    );
}
 
export default Buscador;