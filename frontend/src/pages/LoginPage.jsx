import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import loginPic from '../assets/login.jpg';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slices/authSlice';
import { BASE_API_URL } from '../utils/routes';

const handleSubmit = async (values, navigate, setStatus, dispatch) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/login`, {
      username: values.username,
      password: values.password,
     });
    const token = response.data.token;
    const username = response.data.username;
    dispatch(loginSuccess({ token, username }));
    setStatus();
    navigate('/');
  } catch (error) {
    console.log('Ошибка во время отправки данных:', error);
    setStatus('Неверное имя пользователя или пароль');
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, { setStatus }) => handleSubmit(values, navigate, setStatus, dispatch),
  });
  return (
    <Container className='container-fluid h-100'>
      <Row className='row justify-content-center align-content-center h-100'>
        <Col className='col-12 col-md-8 col-xxl-6'>
          <Card className='card shadow-sm'>
            <Card.Body className='card-body row p-5'>
              <Col className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                <img src={loginPic} className='rounded-circle' alt='Войти' />
              </Col>
              <Form className='col-12 col-md-6 mt-3 mt-md-0' onSubmitCapture={formik.handleSubmit}>
                <h1 className='text-center mb-4'>Войти</h1>
                <Form.Group className='form-floating mb-3' controlId='username'>
                  <Form.Control
                    className='form-control'
                    type='text'
                    placeholder='Ваш ник'
                    name='username'
                    autoComplete='username'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    isInvalid={formik.status}
                  ></Form.Control>
                  <Form.Label>Ваш ник</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating mb-4' controlId='password'>
                  <Form.Control
                    className='form-control'
                    type='password'
                    placeholder='Пароль'
                    autoComplete='current-password'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={formik.status}
                  ></Form.Control>
                  <Form.Label>Пароль</Form.Label>
                  {formik.status && (
                    <Form.Control.Feedback type="invalid" className='d-block mb-3' tooltip>
                      {formik.status}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Button
                  type='submit'
                  variant="outline-primary"
                  className="w-100 mb-3 btn"
                >
                  Войти
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className='card-footer p-4'>
              <div className='text-center'>
                <span>Нет аккаунта? </span>
                <a href='/signup'>Регистрация</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
};

export default LoginPage;
