import { useState} from "react"

const ItemCount = ({initial=0, stock, onAdd}) => {
const [contador,setContador]=useState(initial);
    /*SUMAR*/ 
    const agregar = () =>{
        contador<stock && setContador(contador+1);
    }
    /*RESTAR*/ 
    const restar = () =>{
        contador>0 && setContador(contador-1)
    } 
    /*RESET*/ 
    const reset = () =>{
        setContador(initial)
    }
    return(
        <>
        <h2>¿Cuantos servicios necesitas?</h2>
        <h2>{contador}</h2>
        <button onClick={agregar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={onAdd}>Elegir</button>
        </>
    )
}

export default ItemCount