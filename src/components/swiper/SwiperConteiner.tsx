import React, {FC, SetStateAction} from 'react';
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import styles from './SwiperConteiner.module.css';
import 'swiper/css/navigation';
import {NextButton, PrevButton} from '../ui/button/swiperButton';
import {IUser} from '../../types/types';
import {imgUrl} from '../../utils/utils';

SwiperCore.use([Navigation]);

interface SwiperContainerProps {
  users: IUser[];
  setCurrentUserInfo: React.Dispatch<
    SetStateAction<{id: number; name: string} | undefined>
  >;
}

export const SwiperContainer: FC<SwiperContainerProps> = ({
  users,
  setCurrentUserInfo,
}) => {
  const navigation = {
    prevEl: '.prevElButton',
    nextEl: '.nextElButton',
  };

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        className={styles.swiper}
        spaceBetween={18}
        slidesPerView={4}
        navigation={navigation}
      >
        {users.map((user) => (
          <SwiperSlide
            onClick={() => setCurrentUserInfo({id: user.id, name: user.name})}
            key={user.id}
            className={styles.swiper__item}
          >
            <div className={styles.imgContainer}>
              <img src={imgUrl(user.id)} alt={user.name} />
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
    </div>
  );
};
