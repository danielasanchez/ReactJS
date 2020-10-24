import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Body extends Component{
    render(){
        const {texto} = this.props;
        return(
            <div>
            <p>{texto}</p>
            <p>{this.props.numero}</p>
            {JSON.stringify(this.props.booleano)}
            {
                this.props.arreglo.map((e,index)=>
                        <h1 key={index}>{e}</h1>
                )
            }
            {this.props.objeto.nombre}
            {this.props.etiqueta}
            {this.props.funcion(5)}
            </div>
        )};
}

export default Body;

Body.propTypes={
    texto:PropTypes.string.isRequired,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    funcion:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}

Body.defaultProps={
    texto:"Hola mundo"
}










/*
function Body(props){
    return(
        <div>
           <p>{props.texto}</p>
           {props.numero}
           {JSON.stringify(props.booleano)}
           {
               props.arreglo.map((e,index)=>
                    <h1 key={index}>{e}</h1>
               )
           }
           {props.objeto.nombre}
           {props.etiqueta}
           {props.funcion(5)}
        </div>
    );
}
*/
