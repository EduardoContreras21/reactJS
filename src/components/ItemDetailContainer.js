import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/Firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

const styles ={
  titulos:{
      textAlign: 'center',
  }
}

const ItemDetailContainer = () => {
    const {itemId} = useParams ();
    const [servicio, setServicio] = useState([]);
    const [loading, setLoading] = useState (true);
    
    useEffect(() => {
      const productsCollection = collection (db, 'servicios');
      const refDoc = doc(productsCollection, itemId)
      getDoc(refDoc).then(
        result => {
          const servicios ={
            id: result.id,
            ...result.data(),
          }
          setServicio(servicios);
        }
      )
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    },[itemId]);
    
    return(
        <>
        {loading
        ? <h2 style={styles.titulos}>ITEM DETAIL</h2>
        :<div><ItemDetail servicio={servicio} /></div>
}</>
  );

  
}
export default ItemDetailContainer