import React from 'react';
import './Body.css';

function Body(props){
    return(
        <div className="Body">
            <p>{props.texto1}</p>
            <p>{props.texto2}</p>
        </div>
    )
}

export default Body;