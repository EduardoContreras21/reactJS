import {useEffect, useState} from 'react'
import services from '../services.json'

/* PROMESA */
const prom = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(services);
    },2000);
});
const ItemDetail = () => {
    const [services, setServices] = useState({});
    /* USE EFFECT */
    useEffect(()=>{
        prom.then((data)=>{
            console.log(data);
            setServices(data);
        }).catch ((data)=>{
        console.log(data);
    })},[]);
    return(
    <>
    {services.map((services)=><h2 key={services.id}>{services.name}{services.price}{services.descripcion}</h2>)}
    </>
    )
}

export default ItemDetail