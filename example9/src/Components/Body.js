import React, {Component} from 'react';

class Body extends Component{
    render(){
        const {texto} = this.props;
        return(
            <div>
            <p>{texto}</p>
            {this.props.numero}
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
export default Body;