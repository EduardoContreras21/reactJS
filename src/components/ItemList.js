import {useEffect, useState} from 'react'
import item from './item';

/* PROMESA */
const promesa = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(item);
    },2000);
});
const ItemList = () => {
    const [servicios, setServicios] = useState([]);
    /* USE EFFECT */
    useEffect(()=>{
        promesa.then((data)=>{
            console.log(data);
            setServicios(data);
        }).catch ((data)=>{
        console.log(data);
    })},[]);
    return(
    <>
    {servicios.map((servicios)=><h2 key={servicios.precio}>{servicios.name}</h2>)}
    </>
    )
}

export default ItemList