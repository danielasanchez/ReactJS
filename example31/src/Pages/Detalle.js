import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import nophoto from '../nophoto.png';

const Detalle = () => {

    //en App.js establecimos path='/detalle/:id'
    //ahora necesitamos sacar que valor tienen id para poder
    //buscar nuevamente en la API los detalles de la pelicula.
    //useParams me permite sacar dicho valor de la URL
    const { id } = useParams(); 
     
    const [datos, setDatos] = useState([]);

    //Hago una nueva peticion porque es diferente URL la utilizada
    //para obtener dichos datos.
    useEffect(() => {
        const apikey = "";
        const api_url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apikey}`
        fetch(api_url)
            .then(data => {
                return data.json()
            }).then(resultado => {
                setDatos(resultado)
                //console.log(resultado);
            });

    }, [id])

//ese enlace (Link) no es necesario ya que tengo un navbar que me permite regresar 
//a buscar pero, quiero que vean como podrian dirigirse a otra pagina indicando la
//ruta en "to" por ejemplo to='/contacto'. 
    return (
        <div>

            <Link to='/'>
                No soy necesario pero me pusieron aqui
            </Link>
            <h1>{datos.Title}</h1>
            {
                datos.Poster === "N/A"
                ?
                <img width='20%' src={nophoto} alt={"Sin imagen"}></img>
                :
                <img width='20%' src={datos.Poster} alt={datos.Title}></img>
            }

            <p>
                {datos.Released}
                {datos.Actors}
                {datos.Plot}
                {datos.Genre}
                {datos.Production}
                {datos.Awards}
            </p>

        </div>

    );
}

export default Detalle;