import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../../images/utility/logo.svg';
import profileImg from '../../images/utility/profile.svg';
import cartImg from '../../images/utility/cart.svg';

const Header = () => {
  return (
    <header className='header'>
      <button
        className='header__burger'
        type='button'
      ></button>
      <img className='header__logo' src={logoImg} alt='Логотип' />
      <div className='header__links'>
        <Link to='/'>
          <img src={profileImg} alt='Профиль' />
        </Link>
        <Link to='/'>
          <img src={cartImg} alt='Корзина' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
