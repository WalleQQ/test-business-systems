import React, { FC } from 'react';
import { IPost } from '../../types/types';
import styles from './PostsItem.module.css';

interface PostsItemProps {
  post: IPost;
}

export const PostsItem: FC<PostsItemProps> = ({ post }) => {
  return (
    <li>
      <h3 className={styles.postsItemTitle}>{post.title}</h3>
      <p className={styles.postsItemContent}>{post.body}</p>
    </li>
  );
};
