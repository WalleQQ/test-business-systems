import React from 'react';
import { usePosts } from '../../../hooks/UsePosts';
import { PostsList } from '../../posts-list/PostsList';
import { Users } from '../../users/Users';
import styles from './Bloggers.module.css';

export const Bloggers = () => {
  const { posts, loading, error, fetchUserPosts } = usePosts();

  return (
    <section className={styles.bloggers}>
      <h2 className={styles.bloggers__title}>Наши топ-блогеры</h2>
      <p className={styles.bloggers__text}>
        Лучше специалисты в своем деле, средний&nbsp;опыт&nbsp;работы в
        профессии - 27 лет
      </p>
      <Users fetchUserPosts={fetchUserPosts} />
      <div className={styles.posts}>
        <h2 className={styles.postsTitle}>3 актуальных поста Moriah.Stanton</h2>
        <PostsList posts={posts} error={error} loading={loading} />
      </div>
    </section>
  );
};
