import { useState} from "react"

const ItemCount = ({initial=0, stock, onAdd}) => {
const [contador,setContador]=useState(initial);
    /*SUMAR*/ 
    const sumar = () =>{
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
    /*AGREGAR*/
    const agregar =()=>{
        onAdd(contador)
    }
    return(
        <>
        <h2>¿Cuantos servicios necesitas?</h2>
        <div className="d-flex justify-content-center align-items-center">
            <button onClick={sumar}>+</button>
            <h2>{contador}</h2>
            <button onClick={restar}>-</button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <button onClick={reset} className='btn btn-primary'>Reset</button>
        <button onClick={agregar} className='btn btn-primary'>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount