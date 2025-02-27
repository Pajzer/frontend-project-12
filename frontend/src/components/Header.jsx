import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logout } from '../slices/authSlice';
import { changeLanguage } from '../slices/langSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const currentLanguage = useSelector(({ language }) => language.currentLanguage);

  const renderLogoutButton = () => {
    if (isLoggedIn) {
      return (
        <Button type="button" onClick={() => dispatch(logout(null))}>{t('header.logout')}</Button>
      );
    }
    return null;
  };

  const renderChatLink = () => {
    if (isLoggedIn) {
      return (
        <a href="/" className="navbar-brand">{t('header.chat')}</a>
      );
    }
    return null;
  };

  const renderLanguageButtons = () => {
    const languages = [
      { label: 'Ru', code: 'ru' },
      { label: 'En', code: 'en' },
    ];

    const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      dispatch(changeLanguage(lang));
    };

    return (
      <div className="language-buttons me-2">
        {languages.map(({ label, code }) => (
          <Button
            key={code}
            type="button"
            variant={currentLanguage === code ? 'secondary' : 'outline-secondary'}
            onClick={() => handleChangeLanguage(code)}
          >
            {label}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a href="/login" className="navbar-brand">
            {t('header.title')}
          </a>
          {renderChatLink()}
        </div>
        <div className="d-flex align-items-center">
          {renderLanguageButtons()}
          {renderLogoutButton()}
        </div>
      </div>
    </nav>
  );
};

export default Header;
