import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

const Promo = ({ title, subtitle, btnText, isSecondPromo }) => {
  return !isSecondPromo ? (
    <section className="promo-container">
      <div className='promo'>
        <p className="promo__title">
          {title}
        </p>
        <p className="promo__subtitle">
          {subtitle}
        </p>
        <Link to='/' className='promo__button'>{btnText}</Link>
      </div>
    </section>
  ) :
  (
    <section className="promo-container">
      <div className='promo promo2'>
        <p className="promo__title">
          {title}
        </p>
        <p className="promo__subtitle promo2__subtitle">
          {subtitle}
        </p>
        <Link to='/' className='promo__button'>{btnText}</Link>
      </div>
    </section>
  )
}

export default Promo;
