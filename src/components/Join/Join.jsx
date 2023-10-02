import React from 'react';
import './Join.css';
import galleryImgFirst from '../../images/content/join-1-320.jpg';
import galleryImgSecond from '../../images/content/join-2-320.jpg';
import galleryImgThird from '../../images/content/join-3-320.jpg';
import galleryImgFourth from '../../images/content/join-4-320.jpg';

const Join = () => {
  return (
    <section className='join'>
      <h2 className='join__title'>Присоединяйтесь к нам</h2>
      <p className='join__subtitle'>Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</p>
      <button className='join__button'>Подписаться</button>
      <div className='join__gallery'>
        <img className='join__img' src={galleryImgFirst} alt='' />
        <img className='join__img' src={galleryImgSecond} alt='' />
        <img className='join__img' src={galleryImgThird} alt='' />
        <img className='join__img' src={galleryImgFourth} alt='' />
      </div>
    </section>
  );
}

export default Join;
