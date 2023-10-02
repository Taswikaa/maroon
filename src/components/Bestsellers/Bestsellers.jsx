import React from 'react';
import { Link } from 'react-router-dom';
import './Bestsellers.css';
import productSrc from '../../images/content/high.jpg';

const Bestsellers = () => {
  return (
    <div className='bestsellers'>
      <h2 className="bestsellers__title">Бестселлеры</h2>
      <p className="bestsellers__subtitle">Легендарные продукты,
завоевавшие любовь
наших клиентов</p>
      <ul className='bestsellers__list'>
        <li className='bestsellers__item'>
          <img src={productSrc} alt='Крем high' />
          <div className='bestsellers__item-info'>
            <p className="bestsellers__item-title">High</p>
            <p className="bestsellers__item-description">крем для лица</p>
            <Link className="bestsellers__item-link" to='/'>Подробнее</Link>
          </div>
        </li>
      </ul>
      <Link to='/' className='bestsellers__button'>Смотреть все</Link>
    </div>
  );
}

export default Bestsellers;
