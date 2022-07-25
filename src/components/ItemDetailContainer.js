import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {items} from './ItemList'
import { db } from '../Firebase/Firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

  
export const ItemDetailContainer= () => {
    const {itemId} = useParams ();
    const [servicio, setServicio] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
      const productsCollection = collection (db, 'servicios');
      const refDoc = doc(productsCollection, itemId)
      getDoc(refDoc).then(
        result => {
          setServicio({
            id: result.id,
            ...result.data(),
          })
        }
      )
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    },[itemId]);

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
            <ItemDetail servicio={servicio} />
        </div>
        </>
  );


const styles ={
    titulos:{
        textAlign: 'center',
    }
}
}
export default ItemDetailContainer