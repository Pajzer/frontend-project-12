import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import PageNotFound from './pages/NotFoundPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => (
  <BrowserRouter>
    <div className="d-flex h-100 flex-column">
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
