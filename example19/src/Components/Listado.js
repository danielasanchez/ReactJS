
const Listado = (props) => {
    return (  
        <div className="Lista">
            
            {
                props.busqueda===false
                ?
                <h3>Realiza una busqueda</h3>
                :
                <h3>{props.total} resultados</h3>
            }
            

            
            <div className="Lista-contenido">
            {
                props.arreglo.map((p,i)=>{
                    return(
                        <div className="Lista-pelicula" key={i}>
                            <img width='100%' src={p.Poster} alt={p.Title}></img>
                        </div>
                    )
                }

                )
            }


            </div>
        </div>
    );
}
 
export default Listado;