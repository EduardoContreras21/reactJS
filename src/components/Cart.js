import React, { useContext } from 'react'
import { contexto } from '../Context/CartContext';
import Formulario from './Formulario';

function Cart() {
  const { carrito } = useContext(contexto);
  console.log (carrito);

  return (
    <>
    <h2>Resumen de compra</h2>
    {carrito.map((c)=>(
      <div>
        <span>Servicio: {c.title}</span><br></br>
        <span>Cantidad: {c.cantidad}</span><br></br>
      </div>
    ))}
    <Formulario />
    </>
  )
  }

export default Cart