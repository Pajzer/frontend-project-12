import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
