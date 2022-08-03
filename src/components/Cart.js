import React, { useContext } from 'react'
import { contexto } from '../Context/CartContext';
import { Link } from 'react-router-dom'

const Cart =() => {
  const { servCarrito, removeServicio, clearServicio, total } = useContext(contexto);

  return (
    <>
    <h2>Resumen de compra</h2>
    {servCarrito.length === 0 ?
    <div>
      <h2>Por favor agrega un servicio</h2>
      <Link to='/'><button className= 'btn btn-primary'>Agregar servicio</button></Link> 
    </div>
    :
    <>
    {servCarrito.map(c => 
      <div>
        <h2 key={c.id}> {c.title} <button onClick={() => removeServicio(c.id)} className= 'btn btn-primary'>Quitar servicio</button></h2>
        <span>Cantidad: {c.cantidad}</span><br></br>
        <span>${c.cantidad * c.precio}</span><br></br>
      </div>
    )}
        <div> Total de la compra: ${total()} </div>
        <button onClick={clearServicio} className= 'btn btn-primary'>No quiero agendar</button>
        <Link to='/Formulario'><button className= 'btn btn-primary'>Comprar</button></Link>
    </>}
    </>
  )
  }

export default Cart