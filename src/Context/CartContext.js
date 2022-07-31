import React, { createContext, useState, useEffect } from 'react'


export const contexto = createContext() 
const { Provider } = contexto;  

const CustomProvider = ({children}) =>{
const [carrito, setCarrito] = useState([])
const [qtyCompra, setQtyCompra] = useState(0)

const getQtyCompra = () => {
  let cantidad = 0;
  carrito.forEach(items => cantidad += items.cantidad
  );
  setQtyCompra(cantidad);
}
useEffect(() => {
  getQtyCompra();
},[carrito])

const addServicio = (items) =>{
  if(isInCart(items.id)){
    const found = carrito.find(p => p.Id === items.id);
    const index = carrito.indexOf(found);
    const auxCarrito = [...carrito];
    auxCarrito[index].cantidad += items.cantidad;
    setCarrito(auxCarrito);
}
  else{
    setCarrito([...carrito, items])
};
}

const removeServicio = (id) =>{
  setCarrito(carrito.filter(items => items.Id !==id))
}

const clearServicio = () =>{
  setCarrito([]);
  setQtyCompra(0);
}

const isInCart = (id) =>{
  return(
    carrito.some(carrito=> carrito.Id === id)
  )
}

    return (
    <Provider value={{ carrito, qtyCompra, addServicio, removeServicio, clearServicio }}>
      {children}
    </Provider>
  )
}

export default CustomProvider