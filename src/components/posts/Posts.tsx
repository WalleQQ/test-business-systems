import React, { FC, useEffect } from 'react';
import { usePosts } from '../../hooks/UsePosts';
import { PostsList } from '../posts-list/PostsList';
import styles from './Posts.module.css';

export const Posts: FC = () => {
  const { posts, loading, error } = usePosts();

  if (error)
    return (
      <p className={styles.error}>Произошло что-то ужасное...Попробуй снова</p>
    );
  return (
    <div className={styles.posts}>
      <h2 className={styles.postsTitle}>3 актуальных поста Moriah.Stanton</h2>
      <PostsList posts={posts} />
    </div>
  );
};
