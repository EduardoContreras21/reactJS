import React, { useState, useContext } from "react";
import { contexto } from "../Context/CartContext";
import Form from 'react-bootstrap/Form';
import { db } from '../Firebase/Firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom'

const Formulario = () =>{
  const { servCarrito, total } = useContext(contexto);
  const [idVenta, setIdVenta] = useState()
  const [comprador, setComprador] = useState( {
    Nombre: '',
    Apellido: '',
    Celular: '',
})

const {Nombre, Apellido, Celular} = comprador

const Input = (e) =>{
  setComprador(({
    ...comprador,
    [e.target.name]: e.target.value
  }))
}

const finalizarCompra = () =>{
    const ventasCollection = collection (db, 'ventas');
    addDoc(ventasCollection, {
      comprador,
      items : [{servCarrito}],
      date : serverTimestamp(),
      totalCompra : total(),
    })
  .then((result) => {
    setIdVenta(result.id)
  })
}
  return (
    <>
    {(!idVenta && <div>
        <h3 style={styles.titulo}>DATOS DEL COMPRADOR</h3>
        <Form onSubmit={finalizarCompra}> 
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre"  required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text"  name="Apellido" onChange={Input} value={Apellido} placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Numero de celular</Form.Label>
        <Form.Control type="number"name="Celular" onChange={Input} value={Celular}  placeholder="Celular" required />
        </Form.Group>
        </Form>
        <button onClick={finalizarCompra} className= 'btn btn-primary'>Agendar Servicios</button>
      </div>)
    }
    {
      idVenta && (
        <div><h4 style={styles.titulo}>TU CITA HA SIDO AGENDADA</h4>
        <p>{`A NOMBRE DE ${Nombre} ${Apellido}`} </p>
        <p>{`El ID de su compra es: ${idVenta}`}</p>
        <h5 style={styles.titulo}>GRACIAS POR TU PREFERENCIA</h5>
        <Link to='/'><button className= 'btn btn-primary'>Terminar</button></Link>
        </div>
      )
    }
  </ >
  )
  }
const styles ={
  titulo:{
    textAlign: 'center',
    }
}

export default Formulario;