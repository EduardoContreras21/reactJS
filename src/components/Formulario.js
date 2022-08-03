import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import { contexto } from '../Context/CartContext';
import { db } from '../Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export const Formulario =() => {
  const { carrito, clearServicio, total } = useContext(contexto)
    const [idOrden, setIdOrden] = useState()
    const [loading, setLoading] = useState(false)
    const [comprador, setComprador] = useState({
        Nombre: '',
        Apellido: '',
        Celular: '',
    })
    const { Nombre, Apellido, Celular } = comprador
    const Input = (e) => {
        setComprador(({
            ...comprador,
            [e.target.name]:e.target.value
        }))
    }
    const generarPedido = async (data) => {
        try {
            const coleccion = collection(db, 'ventas')
            const order = await addDoc(coleccion, data)
            setIdOrden(order.id)
            clearServicio()
        } catch (error) {
            <p>error</p>
        }
    }
    const enviar = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = carrito.map(e => { return { Id:e.id, Titulo: e.title, Precio: e.precio, disponibilidad: e.disponibilidad } })
        const totalCompra = total()
        const data = { comprador, dia, items, totalCompra }
        generarPedido(data)
    }
  return (
    <>
    {loading ? <p>cargando</p>
                : (!idOrden && <div>
    <Form onSubmit={enviar}> 
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" onChange={Input} placeholder="Nombre" value={Nombre} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" onChange={Input} placeholder="Apellido" value={Apellido} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Numero de celular</Form.Label>
        <Form.Control type="number" onChange={Input} placeholder="Celular" value={Celular} required />
        </Form.Group>
          <button className='btn btn-primary' type="submit">
            Finalizar Compra
          </button>
    </Form></div>
  )}
  {idOrden&&(
  <div>
  <h3>{`Gracias por tu Compra ${Nombre} ${Apellido}`}</h3>
  <p>{`ID de compra ${idOrden}`}</p>
  <div ><Link to='/' >Realizar otra compra </Link></div>
  </div>
    )}
    </>
    )
  }

export default Formulario;