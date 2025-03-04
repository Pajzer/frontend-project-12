import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/NotFoundPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import { appRoutes } from './utils/routes.js';
import Header from './components/Header.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.login} element={<LoginPage />} />
        <Route path={appRoutes.signup} element={<RegistrationPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={appRoutes.main} element={<ChatPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
