import React, {createContext, useState, useEffect} from 'react'
import Swal from 'sweetalert2';

export const FirebaseContext = createContext();

const FirebaseProvider = (props)=>{
    const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      })
  
  const [lista, setLista]= useState(()=>{
    const listaAlumnos = localStorage.getItem("Alumnos")

    return listaAlumnos?JSON.parse(listaAlumnos):[];
  })

  const [desactivado, setDesactivado]=useState(false)
  
  useEffect(()=>{
      localStorage.setItem("Alumnos",JSON.stringify(lista))
      if(lista.length===0){
        localStorage.removeItem("Alumnos")
      }
  },[lista])


  const guardarCambios=(e)=>{

    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value
    })
    
  }
  
  const eliminar=(id)=>{
    const temporal = lista.filter(a=>a.matricula!==id)

    setLista(temporal)
    
  }

  const modificar=(id)=>{
    const temporal = lista.find(a=>a.matricula===id);

    setAlumno({
        matricula:temporal.matricula,
        nombre:temporal.nombre,
        correo:temporal.correo,
        carrera:temporal.carrera
    })
    setDesactivado(true)
  
  }
  
  const enviar=(e)=>{
    e.preventDefault();

    const {matricula,nombre, correo, carrera} = alumno;
      
    const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 

    if(!vacios){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Alumno agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
      let temporal = lista;

      if(desactivado===true){
        temporal= temporal.filter(a=>a.matricula!==matricula)
      }

      setLista([
        ...temporal,
        alumno
      ])
      setAlumno({
          matricula:"",
          nombre:"",
          correo:"",
          carrera:""
      })

      setDesactivado(false)
      
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    
  }

    return(
        <FirebaseContext.Provider
            value={{
                alumno,
                lista,
                desactivado,
                enviar,
                guardarCambios,
                eliminar,
                modificar
            }}>
                {props.children}

        </FirebaseContext.Provider>
    );
}

export default FirebaseProvider;