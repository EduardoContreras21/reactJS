import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Formulario() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="LastName" placeholder="Apellido" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Numero de celular</Form.Label>
        <Form.Control type="cellphone" placeholder="Celular" />
      </Form.Group>
      <Link to='/'><button className='btn btn-primary' type="submit">
        Finalizar Compra
      </button></Link>
    </Form>
  );
}

export default Formulario;