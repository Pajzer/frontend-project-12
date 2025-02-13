import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <Form>
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="name" placeholder="Ваш ник" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Пароль" />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="w-100">
        Войти
      </Button>
    </Form>
  );
};

export default LoginForm;