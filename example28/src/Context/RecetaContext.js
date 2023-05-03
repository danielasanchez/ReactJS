import React, {createContext, useState} from 'react'
//import Swal from 'sweetalert2';


export const RecetaContext = createContext();

const RecetaProvider = (props)=>{
    const [productos] = useState([
        {id:1, clave:"Q1",descripcion:"aceite",unidad:"1 cda"},
        {id:2, clave:"Q1",descripcion:"aceite",unidad:"2 cdas"},
        {id:3, clave:"Q2",descripcion:"huevo",unidad:"1 pieza"},
        {id:4, clave:"Q2",descripcion:"huevo",unidad:"2 piezas"},
        {id:5, clave:"Q3",descripcion:"jamon",unidad:"1/4 kilo"},
        {id:6, clave:"Q3",descripcion:"jamon",unidad:"1/2 kilo"},
      ]);
  
    const [ingredientes, setIngredientes] =  useState([]);
  
    const agregar=(p)=>{
      let existe = ingredientes.find((a,i)=>a.clave===p.clave)
  
      if(!existe){
        setIngredientes([...ingredientes,p]);
      }else{
        alert("No se puede agregar, ya seleccionaste este producto con otra cantidad");
      }
      //console.log(p)
    }
  
    const eliminar=(p)=>{
      let temporal = ingredientes.filter((elemento,i)=>elemento.id!==p.id);  
      setIngredientes(temporal);
    }
    

    return(
        <RecetaContext.Provider
            value={{
                productos,
                ingredientes,
                agregar,
                eliminar
            }}
        >
                {props.children}

        </RecetaContext.Provider>
    );
}

export default RecetaProvider;