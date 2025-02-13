import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegistrationForm = () => {
  return (
    <Form>
      <h1 className="text-center mb-4">Регистрация</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="name" placeholder="Имя пользователя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Пароль" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRepeatPassword">
        <Form.Control type="password" placeholder="Подтвердите пароль" />
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="w-100">
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default RegistrationForm;