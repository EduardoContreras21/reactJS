import React from 'react'
import ItemCount from './ItemCount'

/*Item List Container*/ 
const ItemListContainer = () => {
    /*OnADD*/ 
    const onAdd =() =>{
        alert('Gracias por tu elección')}
    return(
        <>
        <h2 style={styles.titulos}>LISTA DE SERVICIOS DE LUXORA</h2>
        <ItemCount initial={0} stock={3} onAdd={onAdd}/>
        </>
        )
}

const styles ={
    titulos:{
        textAlign: 'center',
    }
}

export default ItemListContainer