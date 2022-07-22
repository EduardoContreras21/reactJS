import React from 'react'
import items from './ItemList'
import ItemCount from './ItemCount'
import {Link, useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react'
import { contexto } from '../Context/CartContext'

function ItemDetail({servicio}) {
  const navigate = useNavigate ()
  const { addServicio } = useContext(contexto);
  const {carrito, setCarrito} = useState (false);
  const onAdd = (contador) =>{
    setCarrito(true)
    addServicio({...items, cantidad:contador});
  }
  return (
    <>
    <div className="card container d-flex justify-content-center align-items-center h-100" >
        <img src={servicio.imagen} alt=''style={{maxHeight: 500 }}></img>
        <div className='card-body col-md-4'>
            <h4 className='card-title text-center'>{servicio.title}</h4>
            <p className='card-text text-left'>{servicio.descripcion}</p>
            <p>
              {servicio.precio}
            </p>
            {carrito ?
<div>
<Link to='./Cart.js'>Agendar Cita</Link>;
<Link to='./'>Seguir Comprando</Link>;
</div>
:
  <ItemCount initial={0} stock={3} onAdd={onAdd} />
}<br></br><br></br>
            <button onClick={()=> navigate(`/servicio/${servicio.id}`)} className='btn btn-primary'>Adquirir</button>
        </div>
    </div>

</>
)
}


export default ItemDetail