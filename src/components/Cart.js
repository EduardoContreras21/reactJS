import React, { useContext, useState } from 'react'
import { contexto } from '../Context/CartContext';
import { Link } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import Formulario from './Formulario';

const Cart =() => {
  const { servCarrito, removeServicio, clearServicio, total } = useContext(contexto);
  const [idVenta, setIdVenta] = useState("")

  const comprador = {
    Nombre: '',
    Apellido: '',
    Celular: '',
}

const finalizarCompra = () =>{
  const ventasCollection = collection (db, 'ventas');
  addDoc(ventasCollection,{
    comprador,
    items:contexto,
    date: serverTimestamp(),
    total: total,
  })
  .then((result)=>{
    setIdVenta(result.id)
  })

  const updateCollection = doc(db, "servicios") 
  updateDoc(updateCollection)
}
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
        <span>Cantidad: {c.cantidad}</span><br></br>
        <span>${c.cantidad * c.precio}</span><br></br>
      </div>
    )}
        <div> Total de la compra: ${total()} </div>
        <button onClick={clearServicio} className= 'btn btn-primary'>No quiero agendar</button><br></br><br></br>
        <h3 style={styles.titulo}>DATOS DEL COMPRADOR</h3>
        <Formulario />
        <button className= 'btn btn-primary'type="submit" onClick={finalizarCompra}>Comprar</button>
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