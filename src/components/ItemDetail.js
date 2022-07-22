import React from 'react'
import items from './ItemList'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import { contexto } from '../Context/CartContext'

function ItemDetail({servicio}) {
  
  const [carrito, setCarrito] = useState (false);
  const { addServicio } = useContext(contexto);
  const onAdd = (contador) =>{
    setCarrito(true);
    addServicio({...items, cantidad:contador});
  }

  return (
    <div className="card container d-flex justify-content-center align-items-center h-100" >
        <img src={servicio.imagen} alt=''style={{maxHeight: 500 }}></img>
        <div className='card-body col-md-4'>
            <h4 className='card-title text-center'>{servicio.title}</h4>
            <p className='card-text text-left'>{servicio.descripcion}</p>
            <p>
              {servicio.precio}
            </p>
            {carrito 
            ? (<div><Link to='./Cart.js'><button className='btn btn-primary'>Agendar Cita</button></Link>
            <Link to='/'><button className='btn btn-primary'>Seguir Comprando</button></Link></div>)
            :             
            (<ItemCount initial={0} stock={3} onAdd={onAdd} />)
            }          
        </div>
    </div>
)
}


export default ItemDetail