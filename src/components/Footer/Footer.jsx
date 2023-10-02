import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/utility/logo.svg';
import fbIcon from '../../images/utility/fb.svg';
import instIcon from '../../images/utility/inst.svg';
import twIcon from '../../images/utility/tw.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={logo} alt='Логотип' />
        <ul className='footer__list'>
          <Link to='/'>Каталог</Link>
          <Link className='footer__list-item footer__list-item_margin_left' to='/'>О нас</Link>
          <Link to='/'>Магазины</Link>
          <Link to='/'>Контакты</Link>
        </ul>
        <ul className='footer__icons'>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt='' />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={instIcon} alt='' />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={twIcon} alt='' />
        </a>
      </ul>
      </div>
      <div className='footer__rigths'>
        <p className='footer__rigths-text'>Maroon &#169; 2020 Все права защищены</p>
        <a className='footer__rigths-text' href="http://" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}

export default Footer;
