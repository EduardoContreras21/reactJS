import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import items from './ItemList'

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(items);
    }, 2000);
  });
  
function ItemDetailContainer() {
    const {itemId} = useParams
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
      setLoading(true);
      promesa.then((response) => {
        setLoading(false);
        setServicios(response);
      });
    }, [items.id]);

    if (loading) {
      return (
        <>
          <h1>Cargando...</h1>
        </>
      );
    };
    return(
        <>
        <h2 style={styles.titulos}>ITEM DETAIL</h2>
        <div>
            <ItemDetail />
        </div>
        </>
  );
    }    

const styles ={
    titulos:{
        textAlign: 'center',
    }
}

export default ItemDetailContainer