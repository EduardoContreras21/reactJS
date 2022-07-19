import { Category } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import items from './ItemList'




function Item(serv) {
  const navigate = useNavigate()
  return (
    <div className="card text-center">
        <img src={serv.imagen} alt=''></img>
        <div className='card-body'>
            <h4 className='card-title'>{serv.title}</h4>
            <p className='card-text'>{serv.id}</p>
            <button onClick={()=> navigate(`/category/${items.categoryName}`)} className='btn btn-primary'>Adquirir</button>
        </div>
    </div>
  )
}

export default Item