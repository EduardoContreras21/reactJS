import React from 'react'
import items from './ItemList'
import ItemCount from './ItemCount'
import {useNavigate} from 'react-router-dom'


function ItemDetail({servicio}) {
  const navigate = useNavigate ()
  return (
    <div className="card container d-flex justify-content-center align-items-center h-100">
        <img src={servicio.imagen} alt=''></img>
        <div className='card-body col-md-4'>
            <h4 className='card-title text-center'>{servicio.title}</h4>
            <p className='card-text text-left'>{servicio.descripcion}</p>
            <button onClick={()=> navigate(`/servicio/${servicio.id}`)} className='btn btn-primary'>Adquirir</button>
        </div>
    </div>
  )
}
const onAdd =() =>{
  alert('Gracias por tu elección')
return(
  <>
  <ItemCount initial={0} stock={3} onAdd={onAdd}/>
  </>
)
}
export default ItemDetail