import React from "react"
import logo from '../imagenes/logo.luxora.png'

const Navbar = () => {
return(
    <div style={styles.container}>
        <img style={styles.imagen} src={logo} alt="logo" />
        <h1 style={styles.titulo}>LUXORA</h1>
        <nav style={styles.navStyle}>
            <a style={styles.anchors} href="">Uñas</a>
            <a  style={styles.anchors} href="">Gelish</a>
            <a style={styles.anchors} href="">Pedicure</a>
            <a style={styles.anchors} href="">Manicure</a>
            <a style={styles.anchors} href="">Cejas HD</a>
            <a style={styles.anchors} href="">Lashlifting</a>
        </nav>
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
    color:'#ffde8a'
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