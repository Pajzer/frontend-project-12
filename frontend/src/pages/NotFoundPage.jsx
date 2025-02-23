import { Link } from 'react-router-dom';
import page404 from '../assets/page404.svg';
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className='d-flex flex-column h-100'>
      <div className='text-center'>
        <img
          alt={t('page404.title')}
          className='img-fluid h-25'
          src={page404}
        />
        <h1 className='h4 text-muted'>{t('page404.title')}</h1>
        <p className='text-muted'>
          {t('page404.description')} <Link to="/">{t('page404.link')}</Link>
        </p>
      </div>
    </div>
  )
};

export default PageNotFound;
