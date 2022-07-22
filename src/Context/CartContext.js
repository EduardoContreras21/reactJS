import React, {createContext, useState, useEffect } from 'react'
import { items } from '../components/ItemList';


export const contexto = createContext() 
const { Provider } = contexto;  

const CustomProvider = ({children}) =>{

const [qtyCompra, setQtyCompra] = useState(0)
const [carrito, setCarrito] = useState([])

const QtyServ = (items) => {
  let cantidad = 0;
  carrito.forEach(items =>{
      cantidad += items.cantidad
  })
  setQtyCompra(cantidad);
}
useEffect(() => {
  QtyServ();
},[carrito])

const addServicio = () =>{
  if(isInCart(items.id)){
    const found = carrito.find(p => p.id === items.id);
    const index = carrito.indexOf(found);
    const auxcarrito = [...carrito];
    auxcarrito[index].cantidad += items.cantidad;
    setCarrito(auxcarrito);
}
  else{
    setCarrito([...carrito, items])
};
}

const removeServicio = (id) =>{
  setCarrito(carrito.filter(items => items.id !==id))
}
const clearServicio = () =>{
  setCarrito([]);
  setQtyCompra(0);
}
const isInCart = (id) =>{
  return(
    carrito.some(carrito=> carrito.id === id)
  )
}

    return (
    <Provider value={[carrito, qtyCompra,addServicio, removeServicio, clearServicio ]}>
    {children}
    </Provider>
  )
}

export default CustomProvider