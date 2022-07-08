import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import items from './ItemList'
import ItemList from './ItemList'


    /* PROMESA */
const promesa = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(items);
    },2000);
});
/*Item List Container*/ 
const ItemListContainer = () => {
    const [servicios, setServicios] = useState([]);
    /* USE EFFECT */
    useEffect(()=>{
        promesa.then((data)=>{
            console.log(data);
            setServicios(data);
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
        <ItemList />
        </>
        )
}

const styles ={
    titulos:{
        textAlign: 'center',
    }
}

export default ItemListContainer