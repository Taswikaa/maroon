import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';
import logoImg from '../../images/utility/logo.svg';
import profileImg from '../../images/utility/profile.svg';
import cartImg from '../../images/utility/cart.svg';
import faceImg from '../../images/content/link-face.jpg';
import bodyImg from '../../images/content/link-body.jpg';


const HeaderMain = () => {
  return (
    <header className='header-main'>
      <div className='header'>
        <button
          className='header__burger'
          type='button'
        >
        </button>
        <img className='header__logo' src={logoImg} alt='Логотип' />
        <div className='header__links'>
          <Link to='/'>
            <img src={profileImg} alt='Профиль' />
          </Link>
          <Link to='/'>
            <img src={cartImg} alt='Корзина' />
          </Link>
        </div>
      </div>
      <h1 className='header-main__title'>maroon</h1>
      <div className='header-main__subtitle'>
        <p className='header-main__text'>Натуральная косметика</p>
        <p className='header-main__text'>для бережного ухода за кожей</p>
      </div>
      <Link to='/'
        className='header-main__button'
      >
        Подробнее
      </Link>
      <div className='header-main__links'>
        <Link className='header-main__link' to='/'>
          <img src={faceImg} alt='Уход для лица' />
          <p className='header-main__link-text'>Уход для лица</p>
        </Link>
        <Link className='header-main__link' to='/'>
          <img src={bodyImg} alt='Уход для тела' />
          <p className='header-main__link-text'>Уход для тела</p>
        </Link>
      </div>
    </header>
  );
}

export default HeaderMain;
