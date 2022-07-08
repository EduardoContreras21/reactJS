import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import items from './ItemList'
import ItemList from './ItemList'

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(items);
    }, 2000);
  });
  
function ItemListContainer() {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      promesa.then((response) => {
        setLoading(false);
        setServicios(response);
      });
    }, []);

    if (loading) {
      return (
        <>
          <h1>Cargando...</h1>
        </>
      );
    };
  
    /*OnADD*/ 
    const onAdd =() =>{
        alert('Gracias por tu elección')}
    return(
        <>
        <h2 style={styles.titulos}>LISTA DE SERVICIOS DE LUXORA</h2>
        <ItemCount initial={0} stock={3} onAdd={onAdd}/>
        <div>
            <ItemList services={servicios}/>
        </div>
        </>
  );
    }    

const styles ={
    titulos:{
        textAlign: 'center',
    }
}

export default ItemListContainer