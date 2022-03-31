import React, { FC } from 'react';
import styles from './PageWrapper.module.css';

export const PageWrapper: FC = ({ children }) => {
  return <div className={styles.pageWrapper}>{children}</div>;
};
