import React, { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import { Posts } from '../posts/Posts';
import { SwiperContainer } from '../swiper/SwiperConteiner';

export const Users = () => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <SwiperContainer onclick={clickHandler} />
      <Posts />
    </>
  );
};
