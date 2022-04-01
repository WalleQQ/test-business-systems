import React, { FC } from 'react';
import { IPost } from '../../types/types';
import { PostsItem } from '../posts-item/PostsItem';
import { Loader } from '../ui/loader/Loader';
import styles from './PostsList.module.css';

interface PostsListProps {
  posts: IPost[];
  error?: boolean;
  loading?: boolean;
}

export const PostsList: FC<PostsListProps> = ({ posts, error, loading }) => {
  if (error)
    return (
      <p className={styles.error}>Произошло что-то ужасное...Попробуй снова</p>
    );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className={styles.postsList}>
          {posts.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </ul>
      )}
    </>
  );
};
