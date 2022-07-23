import {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import items from './ItemList'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer() {
    const {categoryName} = useParams();
    const [servicios, setServicios] = useState([]);
    
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