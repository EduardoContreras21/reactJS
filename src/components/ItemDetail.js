import React from 'react'
import nails from '../imagenes/acrilicas.tag.jpg'


function ItemDetail() {
  return (
    <div className="card container d-flex justify-content-center align-items-center h-100">
        <img src={nails} alt=''></img>
        <div className='card-body col-md-4'>
            <h4 className='card-title text-center'>Uñas</h4>
            <p className='card-text text-left'>Aplicación de uñas tipo escultural, usando acrílico como material de construcción. Incluye aplicación en gel semipermanente</p>
            <a href='#!' className='btn btn-primary'>Agendar</a>
        </div>
    </div>
  )
}

export default ItemDetail