import React, { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import { Posts } from '../posts/Posts';
import { SwiperContainer } from '../swiper/SwiperConteiner';

export const Users = () => {
  return (
    <>
      <SwiperContainer />
      <Posts />
    </>
  );
};
