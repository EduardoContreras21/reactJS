import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext } from 'react';
import { contexto } from '../Context/CartContext';

const Cartwidget = () => {

    const {qtyCompra} = useContext(contexto);

    return(
        <>
        <ShoppingCartIcon color="action" fontSize="large"/>
        <div><p>{qtyCompra}</p></div>
        </> 
    )}

export default Cartwidget