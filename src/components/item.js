import React from 'react'

function Item({title,imagen,descripcion}) {
  return (
    <div className="card text-center">
        <img src={imagen} alt=''></img>
        <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{descripcion}</p>
            <a href='#!' className='btn btn-primary'>Adquirir</a>
        </div>
    </div>
  )
}

export default Item