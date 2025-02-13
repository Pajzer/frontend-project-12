import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import registrationIcon from '../assets/registrationIcon.jpg';
import RegistrationForm from '../components/RegistrationForm.jsx';

const RegistrationCard = () =>  {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Image src={registrationIcon} alt='Регистрация' roundedCircle />
          </Col>
          <Col>
            <RegistrationForm/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RegistrationCard;