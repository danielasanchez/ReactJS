import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Buscador = (props) => {
    return (
        <div className="Buscador">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Buscador</InputGroup.Text>
                <Form.Control
                    onChange={(e) => props.buscar(e.target.value)}
                />
            </InputGroup>
        </div>
    );
}

export default Buscador;