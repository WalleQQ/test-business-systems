import React from 'react';
import { Users } from '../../users/Users';
import styles from './Bloggers.module.css';

export const Bloggers = () => {
  return (
    <section className={styles.bloggers}>
      <h2 className={styles.bloggers__title}>Наши топ-блогеры</h2>
      <p className={styles.bloggers__text}>
        Лучше специалисты в своем деле, средний&nbsp;опыт&nbsp;работы в
        профессии - 27 лет
      </p>
      <Users />
    </section>
  );
};
