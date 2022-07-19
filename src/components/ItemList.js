import Item from './item'
import nails from '../imagenes/acrilicas.tag.jpg'
import gel from '../imagenes/gelish.tag.jpg'
import pedi from '../imagenes/pedicure.tag.jpg'
import mani from '../imagenes/manicure.tag.jpg'
import hd from '../imagenes/cejashd.tag.jpg'
import lash from '../imagenes/lashlifting.tag.jpg'
import { Category } from '@mui/icons-material'

export const items =[
    {
        id:'0',
        title:'Uñas',
        imagen: nails,
        descripcion:'Aplicación de uñas tipo escultural, usando acrílico como material de construcción. Incluye aplicación en gel semipermanente',
        categoryName: 'nails',
    },
    {
        id:'1',
        title:'Gelish',
        imagen: gel,
        descripcion:'El gelish es un esmalte semipermanente para las uñas que garantiza larga durabilidad, de hasta 21 días',
        categoryName: 'gelish',
    },
    {
        id:'2',
        title:'Pedicure',
        imagen: pedi,
        descripcion:'Tratamiento estético que incluye remocion de cuticula, limado, decorado y complementado por un masaje en pies',
        categoryName: 'pedicure',
    },
    {
        id:'3',
        title:'Manicure',
        imagen: mani,
        descripcion:'Tratamiento estético que incluye remocion de cuticula, limado, decorado y complementado por un masaje en manos',
        categoryName: 'manicure',
    },
    {
        id:'4',
        title:'Cejas HD',
        imagen: hd,
        descripcion:'La finalidad, es crear una apariencia realista de tus cejas mas plenas y rizadas',
        categoryName: 'cejasHD',
    },
    {
        id:'5',
        title:'Lashlifting',
        imagen: lash,
        descripcion:'Tratamiento que alarga y crea una ligera curva hacia arriba de manera natural y duradera, consiguiendo mayor longitud y espesor',
        categoryName: 'lashlifting',
    },
]

const ItemList = () => {
    return(
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                items.map(item =>(
            <div className='col-md-4' key={item.id}>
                <Item {...item}/>
            </div>
))}
        </div>
    </div>
    )}

export default ItemList