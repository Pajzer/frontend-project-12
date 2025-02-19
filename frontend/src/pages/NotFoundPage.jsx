import { Link } from 'react-router-dom';
import page404 from '../assets/page404.svg';

const PageNotFound = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <div className='text-center'>
        <img
          alt='Страница не найдена'
          className='img-fluid h-25'
          src={page404}
        />
        <h1 className='h4 text-muted'>Страница не найдена</h1>
        <p className='text-muted'>
          Но вы можете перейти <Link to="/">на главную страницу</Link>
        </p>
      </div>
    </div>
  )
};

export default PageNotFound;
