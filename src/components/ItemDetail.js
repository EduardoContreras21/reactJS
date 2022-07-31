import React, { useEffect } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { contexto } from '../Context/CartContext'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function ItemDetail({servicios}) {
  
  const [carrito, setCarrito] = useState (false);
  const [image, setImage] = useState();
  const { addServicio } = useContext(contexto);
  
  useEffect(()=>{
    const storage = getStorage();
    getDownloadURL(ref(storage, servicios.imagen))
    .then((url)=>{
      setImage(url);
    });
  },[servicios]);

  const onAdd = (contador) =>{
    setCarrito(true);
    addServicio({...servicios, cantidad:contador});
  }

  return (
    <div className="card container d-flex justify-content-center align-items-center h-100" >
        {image && <img src={image} alt=''style={{maxHeight: 500 }}></img>}
        <div className='card-body col-md-4'>
            <h4 className='card-title text-center'>{servicios.title}</h4>
            <p className='card-text text-left'>{servicios.descripcion}</p>
            <p>
              {servicios.precio}
            </p>
            {carrito 
            ? (<div><Link to='/Cart'><button className='btn btn-primary'>Agendar Cita</button></Link>
            <Link to='/'><button className='btn btn-primary'>Seguir Comprando</button></Link></div>)
            :             
            (<ItemCount initial={0} stock={3} onAdd={onAdd} />)
            }          
        </div>
    </div>
)
}


export default ItemDetail