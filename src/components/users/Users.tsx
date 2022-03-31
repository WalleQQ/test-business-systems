import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Users.module.css';
import 'swiper/css/navigation';
import { NextButton, PrevButton } from '../ui/button/swiperButton';
import { IUser } from '../../types/types';
import axios from 'axios';
import { randomUrl } from '../../utils/utils';
import { Loader } from '../ui/loader/Loader';

SwiperCore.use([Navigation]);

export const Users = () => {
  const navigation = {
    prevEl: '.prevElButton',
    nextEl: '.nextElButton',
  };
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error)
    return (
      <p className={styles.error}>Произошло что-то ужасное...Попробуй снова</p>
    );
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={18}
      slidesPerView={4}
      navigation={navigation}
    >
      {users.map((user) => (
        <SwiperSlide key={user.id} className={styles.swiper__item}>
          <div className={styles.imgContainer}>
            <img src={randomUrl(1, 30)} />
          </div>
          <p className={styles.userName}>{user.name}</p>
          <p className={styles.userCompany}>{user.company.name}</p>
        </SwiperSlide>
      ))}
      <div className={styles.swiper__ButtonWrapper}>
        <PrevButton />
        <NextButton />
      </div>
    </Swiper>
  );
};
