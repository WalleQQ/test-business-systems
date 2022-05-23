import React, {FC, SetStateAction} from 'react';
import 'swiper/css/navigation';
import {IUser} from '../../types/types';
import {SwiperContainer} from '../swiper/SwiperConteiner';
import {Loader} from '../ui/loader/Loader';
import styles from './Users.module.css';

interface UsersProps {
  setCurrentUserInfo: React.Dispatch<
    SetStateAction<{id: number; name: string} | undefined>
  >;
  users: IUser[];
  usersLoading: boolean;
  usersError: boolean;
}

export const Users: FC<UsersProps> = ({
  setCurrentUserInfo,
  users,
  usersLoading,
  usersError,
}) => {
  if (usersError)
    return (
      <p className={styles.error}>Произошло что-то ужасное...Попробуй снова</p>
    );

  return (
    <>
      {usersLoading ? (
        <Loader />
      ) : (
        <SwiperContainer
          users={users}
          setCurrentUserInfo={setCurrentUserInfo}
        />
      )}
    </>
  );
};
