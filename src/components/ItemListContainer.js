import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'

const servicios =[
    {name:"Uñas", precio:350, disponibilidad:3},
    {name:"Gelish", precio:150, disponibilidad:6},
    {name:"Pedicure", precio:380, disponibilidad:3},
    {name:"Manicure", precio:300, disponibilidad:3},
    {name:"Cejas HD", precio:300, disponibilidad:3},
    {name:"Lashlifting", precio:360, disponibilidad:3},
] 

/* PROMESA */
const promesa = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(servicios);
    },2000);
});

/*Item List Container*/ 
const ItemListContainer = () => {
    const [servicios, setServicio] = useState([]);
    /* USE EFFECT */
    useEffect(()=>{
        promesa.then((data)=>{
            console.log(data);
            setServicio(data);
        }).catch ((data)=>{
        console.log(data);
    })},[]);

    /*OnADD*/ 
    const onAdd =() =>{
        alert('Gracias por tu elección')}
    return(
        <>
        <h2 style={styles.titulos}>LISTA DE SERVICIOS DE LUXORA</h2>
        <ItemCount initial={0} stock={3} onAdd={onAdd}/>
        {servicios.map((servicios)=><h2 key={servicios.precio}>{servicios.name}</h2>)}
        </>
        )
}

const styles ={
    titulos:{
        textAlign: 'center',
    }
}

export default ItemListContainer