import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img from '../assets/login.jpg';
import LoginForm from '../components/LoginForm.jsx';
import { Link } from 'react-router-dom';

const LoginCard = () =>  {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col className='text-center'>
            <Image src={img} alt='Войти' roundedCircle />
          </Col>
          <Col>
            <LoginForm/>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className='text-center'>
        <span>Нет аккаунта?</span>
        <Link to='registration'>Регистрация</Link>
      </Card.Footer>
    </Card>
  );
}

export default LoginCard;