import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { items } from './ItemList'


function Item(serv) {

  const navigate = useNavigate()
  const {categoryName} = useParams ();
  const item = serv.id ? serv : items.find(item => item.categoryName === categoryName);

  return (
    <div className="card text-center" style={{maxWidth: 500, margin:"0 auto"}} >
        <img src={item.imagen} alt='' style={{height: 350 }}></img>
        <div className='card-body'>
            <h4 className='card-title'>{item.title}</h4>
            <p className='card-text'>{item.id}</p>
            <button onClick={()=> navigate(`/servicio/${item.id}`)} className='btn btn-primary'>Ver detalle</button>
        </div>
    </div>
  )
  }

export default Item 