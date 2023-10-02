import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';

const History = () => {
  return (
    <section className='history'>
      <q className='history__quote'>
      “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о себе и своем теле”  
      </q>
      <Link className='history__link' to='/'>Наша история</Link>
    </section>
  );
}

export default History;
