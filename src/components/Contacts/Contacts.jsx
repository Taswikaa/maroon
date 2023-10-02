import React from 'react';
import './Contacts.css';
import fbIcon from '../../images/utility/fb.svg';
import instIcon from '../../images/utility/inst.svg';
import twIcon from '../../images/utility/tw.svg';

const Contacts = () => {
  return (
    <section className='contacts'>
      <h2 className='contacts__title'>Контакты</h2>
      <ul className='contacts__list'>
        <li className='contacts__item'>
          <p className='contacts__item-title'>Адрес</p>
          <a className='contacts__item-subtitle' href='https://yandex.ru/maps/2/saint-petersburg/house/bolshaya_konyushennaya_ulitsa_19_8/Z0kYdQVjSUYAQFtjfXVyeXpgZQ==/?ll=30.323036%2C59.938631&z=17.14' rel='noreferrer' target='_blank'>Санкт-Петербург,
ул. Большая Конюшенная, 19</a>
        </li>
        <li className='contacts__item'>
          <p className='contacts__item-title'>Телефон</p>
          <a className='contacts__item-subtitle' href='tel:+79238889060' rel='noreferrer' target='_blank'>+7 (923) 888-90-60</a>
        </li>
        <li className='contacts__item'>
          <p className='contacts__item-title'>E-mail</p>
          <a className='contacts__item-subtitle' href='mailto:info@maroon.ru' rel='noreferrer' target='_blank'>info@maroon.ru</a>
        </li>
      </ul>
      <ul className='contacts__icons'>
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
      <iframe className='contacts__interactive-map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A0556a4b37d22c15fd471a87db391f27696dfc02a6d00864aa5c7d5e8a10de836&amp;source=constructor" width="290" height="281" title='interactive-map'></iframe>
    </section>
  );
}

export default Contacts;
