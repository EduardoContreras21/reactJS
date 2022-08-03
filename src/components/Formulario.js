import React from "react";
import Form from 'react-bootstrap/Form';

export function Formulario ()  {        
  return (
    <>
        <Form > 
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nombre"  required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Numero de celular</Form.Label>
        <Form.Control type="number" placeholder="Celular" required />
        </Form.Group>
        </Form>
  </ >
  )
}

export default Formulario;