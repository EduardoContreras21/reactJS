import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase/Firebase'
import { getDocs, collection, query, where } from "firebase/firestore"

const styles ={
    titulos:{
        textAlign: 'center',
    }
}    

function ItemListContainer() {
    const {categoryName} = useParams();
    const [servicios, setServicios] = useState([]);
    
    useEffect(() =>{
        const q = categoryName
        ? query(collection(db, 'servicios'), where('categoryName','==', categoryName))
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



export default ItemListContainer