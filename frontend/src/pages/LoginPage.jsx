import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Image from 'react-bootstrap/Image';
import img from '../assets/login.jpg';
import SignInForm from '../components/SignInForm';

function Login() {
  return (
    <>
      <Header />
      <Container>
        <Container className="justify-content-center align-content-center">
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Image src={img} fluid />
              </Col>
              <Col>
                <SignInForm/>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <span>Нет аккаута? </span>
                <a href="#">Регистрация</a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </Container>
    </>
  );
}

export default Login;