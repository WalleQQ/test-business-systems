import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import 'swiper/css/navigation';
import { IUser } from '../../types/types';
import { SwiperContainer } from '../swiper/SwiperConteiner';
import { Loader } from '../ui/loader/Loader';
import styles from './Users.module.css';

interface UsersProps {
  fetchUserPosts: any;
}

export const Users: FC<UsersProps> = ({ fetchUserPosts }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users/'
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
    <>
      {loading ? (
        <Loader />
      ) : (
        <SwiperContainer users={users} fetchUserPosts={fetchUserPosts} />
      )}
    </>
  );
};
