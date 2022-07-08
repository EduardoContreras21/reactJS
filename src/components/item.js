import React from 'react'

function Item(serv) {
  return (
    <div className="card text-center">
        <img src={serv.imagen} alt=''></img>
        <div className='card-body'>
            <h4 className='card-title'>{serv.title}</h4>
            <p className='card-text'>{serv.descripcion}</p>
            <a href='#!' className='btn btn-primary'>Adquirir</a>
        </div>
    </div>
  )
}

export default Item