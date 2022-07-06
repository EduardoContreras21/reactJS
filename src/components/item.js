import React from 'react'

function item({title,imagen,descripcion}) {
  return (
    <div className="card text-center">
        <img src={imagen} alt=''></img>
        <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{descripcion}</p>
        </div>
    </div>
  )
}

export default item