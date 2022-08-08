import React, { createContext, useState, useEffect } from 'react'


export const contexto = createContext({
  servCarrito:[]  
}); 
const { Provider } = contexto;  

const CustomProvider = ({children}) =>{
const [carrito, setCarrito] = useState([]);
const [qtyCompra, setQtyCompra] = useState(0);

const getQtyCompra = () => {
  let cantidad = 0;
  carrito.forEach(items => {cantidad += items.cantidad
})
  setQtyCompra(cantidad);
}
useEffect(() => {
  getQtyCompra();
},[carrito]);

const addServicio = (items) =>{
  if(isInCart(items.Id)){
    const found = carrito.find(p => p.Id === items.Id);
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
  setCarrito(carrito.filter(items => items.Id !== id));
};

const clearServicio = () =>{
  setCarrito([]);
  setQtyCompra(0);
}

const isInCart = (id) =>{
  return(
    carrito.some(carrito=> carrito.Id === id)
  )
}

const total= () =>{
  let totalCarrito =0;
  carrito.forEach((e)=>totalCarrito = totalCarrito + parseFloat(e.cantidad*e.precio))
  return totalCarrito.toFixed(2);
}
    return (
    <Provider value={{ servCarrito:carrito, qtyCompra, addServicio, removeServicio, clearServicio, total }}>
      {children}
    </Provider>
  )
}

export default CustomProvider