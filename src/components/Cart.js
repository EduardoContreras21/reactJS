import React, { useContext } from 'react'
import { contexto } from '../Context/CartContext';
import Formulario from './Formulario';

function Cart() {
  const { carrito } = useContext(contexto);
  console.log (carrito);

  return (
    <>
    <div>Cart</div>
    {carrito.map((c)=>(
      <div>
        <span>Titulo: {c.title}</span>
        <span>Cantidad: {c.cantidad}</span>
      </div>
    ))}
    <Formulario />
    </>
  )
  }

export default Cart