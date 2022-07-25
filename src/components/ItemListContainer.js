import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import items from './ItemList'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { getDocs, collection, query, where } from "firebase/firestore"



function ItemListContainer() {
    const {categoryName} = useParams();
    const [servicios, setServicios] = useState([]);
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() =>{
        const q = categoryName
        ? query(collection(db, 'servicios'), where('categoryName','==', {categoryName}))
        : collection(db, 'servicios');

        getDocs(q)
        .then(result =>{
            const lista = result.docs.map(doc => {
                return{
                    id: doc.id,
                ...doc.data()}
            })
            setServicios(lista);
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [categoryName])
    return(
        <>
        <h2 style={styles.titulos}>LISTA DE SERVICIOS DE LUXORA</h2>

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