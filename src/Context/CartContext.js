import React, {createContext, useState, useEffect } from 'react'

export const contexto = createContext() 
const { Provider } = contexto;  

const CustomProvider = ({children}) =>{

const [carrito, setCarrito] = useState([])
const [qtyCompra, setQtyCompra] = useState(0)

const getQtyServ = () => {
  let cantidad = 0;
  carrito.forEach(item =>{ cantidad += item.cantidad
  })
  setQtyCompra(cantidad);
}
useEffect(() => {
  getQtyServ();
},[carrito])

const addServicio = (item) =>{
  if(isInCart(item.id)){
    const found = carrito.find(p => p.id === item.id);
    const index = carrito.indexOf(found);
    const auxCarrito = [...carrito];
    auxCarrito[index].cantidad += item.cantidad;
    setCarrito(auxCarrito);
}
  else{
    setCarrito([...carrito, item])
};

}

const removeServicio = (id) =>{
  setCarrito(carrito.filter(item => item.id !==id))
  
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
    <Provider value={[carrito, qtyCompra, addServicio, removeServicio, clearServicio ]}>
    {children}
    </Provider>
  )
}

export default CustomProvider