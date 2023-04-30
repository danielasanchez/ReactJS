import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import { firebase } from './Settings/ConfigFirebase';
//import firebase from './Settings/ConfigFirebase';
import { onValue, ref, set, update } from 'firebase/database';

//Codigo en componente tipo clase al final
function App(){

  const [alumno, setAlumno] = useState({
    matricula: "",
    nombre: "",
    correo: "",
    carrera: ""
  });

  const [lista,setLista] = useState([]);

  const [desactivado,setDesactivado] = useState(false)
  
  useEffect(() => {

    let alumnosLista = [];
    const dbRef = ref(firebase, 'Alumnos');
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((row) => {
            alumnosLista.push({
                matricula: row.key,
                nombre: row.val().nombre,
                correo: row.val().correo,
                carrera: row.val().carrera
            })
  
        });
        setLista(alumnosLista)
    }, {
        onlyOnce: true
    });


   /* Version anterior
    firebase.database().ref('Alumnos').on('value', snapshot=> {
      let alumnosLista=[];
      snapshot.forEach(row=>{
          alumnosLista.push({
            matricula:row.key,
            nombre:row.val().nombre,
            correo:row.val().correo,
            carrera:row.val().carrera
          })
      })
    
      setLista(alumnosLista)
    });
    */


  }, []);


  const guardarCambios = (e) => {

    setAlumno({
      ...alumno,
        [e.target.name]: e.target.value
    })
  }

  const eliminar = (id) => {

    set(ref(firebase, 'Alumnos/' + id), null)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        // The write failed...
      });

    /*  Version anterior
      firebase.database().ref('Alumnos/' + id).set(null).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      });
    */
    const temporal = lista.filter(a => a.matricula !== id)

    setLista(temporal)
  }

  const modificar = (id) => {
    const temporal = lista.find(a => a.matricula === id);
     setAlumno({
        matricula: temporal.matricula,
        nombre: temporal.nombre,
        correo: temporal.correo,
        carrera: temporal.carrera
      });

      setDesactivado(true)
  }
  
  const enviar = (e) => {
    e.preventDefault();

    const { matricula, nombre, correo, carrera } = alumno;

    //const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 
    const vacios = (matricula.length === 0 || nombre.length === 0 || correo.length === 0 || carrera.length === 0 || carrera === "selecciona")

    if (!vacios) {
      update(ref(firebase, 'Alumnos/' + matricula), alumno)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Alumno agregado',
            showConfirmButton: false,
            timer: 1500
          })
        })

      /*version anterior
     firebase.database().ref('Alumnos/' + matricula).update(this.state.alumno).then(() => {
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Alumno agregado',
         showConfirmButton: false,
         timer: 1500
       })
     });
     */
      let temporal = lista;

      if (desactivado === true) {
        temporal = temporal.filter(a => a.matricula !== matricula)
      }

      setLista([...temporal, alumno]);
      setAlumno({
          matricula: "",
          nombre: "",
          correo: "",
          carrera: ""
        });
      setDesactivado(false)

    }
    else {
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



    return (
      <div className="App">
        <Header />
        <div className="Containers">
          <Formulario
            enviar={enviar}
            guardarCambios={guardarCambios}
            alumno={alumno}
            desactivado={desactivado}
          />
          <Listado
            lista={lista}
            eliminar={eliminar}
            modificar={modificar}
          />

        </div>
      </div>
    )
  
}

export default App;


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       alumno: {
//         matricula: "",
//         nombre: "",
//         correo: "",
//         carrera: ""
//       },
//       lista: [],
//       desactivado: false,
//     };
//   }

//   componentDidMount() {
//     let alumnosLista = [];
//     const dbRef = ref(firebase, 'Alumnos');
//     onValue(dbRef, (snapshot) => {
//       snapshot.forEach((row) => {
//         alumnosLista.push({
//           matricula: row.key,
//           nombre: row.val().nombre,
//           correo: row.val().correo,
//           carrera: row.val().carrera
//         })

//       });
//       this.setState({
//         ...this.state,
//         lista: alumnosLista
//       })
//     }, {
//       onlyOnce: true
//     });

//     /* Version anterior
//     firebase.database().ref('Alumnos').on('value', snapshot=> {
//       let alumnosLista=[];
//       snapshot.forEach(row=>{
//           alumnosLista.push({
//             matricula:row.key,
//             nombre:row.val().nombre,
//             correo:row.val().correo,
//             carrera:row.val().carrera
//           })
//       })
    
//       this.setState({
//         ...this.state,
//         lista:alumnosLista
//       })
//     });
//     */
//   }


//   guardarCambios = (e) => {
//     this.setState({
//       ...this.state,
//       alumno: {
//         ...this.state.alumno,
//         [e.target.name]: e.target.value
//       }
//       //nombre:e.target.value 
//     });
//   }

//   eliminar = (id) => {

//     set(ref(firebase, 'Alumnos/' + id), null)
//       .then(() => {
//         Swal.fire({
//           position: 'center',
//           icon: 'error',
//           title: 'Eliminado',
//           showConfirmButton: false,
//           timer: 1500
//         })
//       })
//       .catch((error) => {
//         // The write failed...
//       });

//     /*  Version anterior
//       firebase.database().ref('Alumnos/' + id).set(null).then(() => {
//         Swal.fire({
//           position: 'center',
//           icon: 'error',
//           title: 'Eliminado',
//           showConfirmButton: false,
//           timer: 1500
//         })
//       });
//     */
//     const temporal = this.state.lista.filter(a => a.matricula !== id)
//     this.setState({
//       ...this.state,
//       lista: temporal
//     })
//   }

//   modificar = (id) => {
//     const temporal = this.state.lista.find(a => a.matricula === id);
//     this.setState({
//       ...this.state,
//       alumno: {
//         matricula: temporal.matricula,
//         nombre: temporal.nombre,
//         correo: temporal.correo,
//         carrera: temporal.carrera
//       },
//       desactivado: true
//     })
//   }
//   enviar = (e) => {
//     e.preventDefault();

//     const { matricula, nombre, correo, carrera } = this.state.alumno;

//     //const vacios = (matricula.length===0 && nombre.length===0 && correo.length===0 && carrera.length===0) || carrera==="selecciona" 
//     const vacios = (matricula.length === 0 || nombre.length === 0 || correo.length === 0 || carrera.length === 0 || carrera === "selecciona")

//     if (!vacios) {
//       update(ref(firebase, 'Alumnos/' + matricula), this.state.alumno)
//         .then(() => {
//           Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'Alumno agregado',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         })

//       /*version anterior
//      firebase.database().ref('Alumnos/' + matricula).update(this.state.alumno).then(() => {
//        Swal.fire({
//          position: 'center',
//          icon: 'success',
//          title: 'Alumno agregado',
//          showConfirmButton: false,
//          timer: 1500
//        })
//      });
//      */
//       let temporal = this.state.lista;

//       if (this.state.desactivado === true) {
//         temporal = temporal.filter(a => a.matricula !== matricula)
//       }

//       this.setState({
//         ...this.state,
//         lista: [...temporal, this.state.alumno],
//         alumno: {
//           matricula: "",
//           nombre: "",
//           correo: "",
//           carrera: ""
//         },
//         desactivado: false
//       })
//     }
//     else {
//       Swal.fire({
//         position: 'center',
//         icon: 'error',
//         title: 'Llena todos los campos',
//         showConfirmButton: false,
//         timer: 1500
//       })
//       return;
//     }
//   }

//   render() {

//     return (
//       <div className="App">
//         <Header />
//         <div className="Containers">
//           <Formulario
//             enviar={this.enviar}
//             guardarCambios={this.guardarCambios}
//             alumno={this.state.alumno}
//             desactivado={this.state.desactivado}
//           />
//           <Listado
//             lista={this.state.lista}
//             eliminar={this.eliminar}
//             modificar={this.modificar}
//           />

//         </div>
//       </div>
//     )
//   }
// }

// export default App;