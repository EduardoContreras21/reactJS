import React from "react"
import logo from '../imagenes/logo.luxora.png'
import Cartwidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const categories = [
        {name:"Uñas", id:"uñas", route:"/category/uñas"},
        {name:"Gelish", id:"gelish", route:"/category/gelish"},
        {name:"Pedicure", id:"pedicure", route:"/category/pedicure"},
        {name:"Manicure", id:"manicure", route:"/category/manicure"},
        {name:"CejasHD", id:"cejasHD", route:"/category/cejasHD"},
        {name:"Lashlifting", id:"lashlifting", route:"/category/lashlifting"},
    ];
return(
    <div style={styles.container}>
        <Link to ="/"><img style={styles.imagen} src={logo} alt="logo" /></Link>
        <h1 style={styles.titulo}>LUXORA</h1>
        <div style={styles.links}>
        <nav>
            {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
            <Link to ="Cart"><Cartwidget /></Link>
        </nav>
        </div>
    </div>
)
}

const styles ={
    container:{
        display: 'flex',
        justifyContent:'Space-between',
        alignItems: 'center',
        backgroundColor: '#3f0c20',
    },
    imagen:{
        width:323,
        height:200,
    },
    titulo:{
    color:'#ffde8a',
    textAlign: 'center',
    },
    navStyle:{
        display:'flex',
        justifyContent: 'space-between',
    },
    anchors:{
        margin:10
    }
}
export default Navbar

