import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import nophoto from '../../nophoto.png'

const Listado = (props) => {
    return (
        <div className="Lista">

            {
                props.busqueda === false
                    ?
                    <h3>Realiza una busqueda</h3>
                    :
                    <h3>{props.total} resultados</h3>
            }

            <div className="Lista-contenido">
                {
                    props.arreglo.map((p, i) => {
                        return (

                            <div key={p.imdbID}>
                                {/* Todo lo que esta en este div podria ir en un componente
                                y solo enviarle como props "p" */}
                                <Link to={`/detalle/${p.imdbID}`}>
                                {/*
                                 cada pelicula nos mandara a un enlace distinto
                                 que depende del id (imdbID) que tiene la pelicula
                                */}

                                    <Card style={{ width: '18rem', margin: '10px' }}>
                                        {
                                            p.Poster === "N/A"
                                                ?
                                                <Card.Img variant="top" src={nophoto} />
                                                :
                                                <Card.Img variant="top" src={p.Poster} />

                                        }

                                        <Card.Body>
                                            <Card.Title>{p.Title}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
}

export default Listado;



/*
           <div className="Lista-pelicula" key={i}>
            <img width='100%' src={p.Poster} alt={p.Title}></img>
        </div>
        
        
        */

