import React, { useContext } from 'react'
import { contexto } from '../Context/CartContext';
import { Link } from 'react-router-dom'



const Cart =() => {
  const { servCarrito, removeServicio, clearServicio, total } = useContext(contexto);
  

return (
    <>
    <h3 style={styles.titulo}>RESUMEN DE COMPRA</h3>
    {servCarrito.length === 0 ?
    <div>
      <h4>Por favor agrega un servicio</h4>
      <Link to='/'><button className= 'btn btn-primary'>Agregar servicio</button></Link> 
    </div>
    :
    <>
    {servCarrito.map(c => 
      <div>
        <h4 key={c.id}> {c.title} <button onClick={() => removeServicio(c.id)} className= 'btn btn-primary'>Quitar servicio</button></h4>
        <span>Cantidad {c.cantidad}</span><br></br>
        <span>${c.cantidad * c.precio}</span><br></br>
      </div>
    )}
        <div> Total de la compra: ${total()} </div>
        <button onClick={clearServicio} className= 'btn btn-primary'>No quiero agendar</button><br></br><br></br>
        <Link to='/Formulario'><button className= 'btn btn-primary'>Comprar</button></Link>
    </>}
    </>
  )
  }
  
  const styles ={
    titulo:{
      textAlign: 'center',
      }
  }

export default Cart
