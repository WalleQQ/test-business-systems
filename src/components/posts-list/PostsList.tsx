import React, {FC} from 'react';
import {IPost} from '../../types/types';
import {PostsItem} from '../posts-item/PostsItem';
import styles from './PostsList.module.css';

interface PostsListProps {
  posts: IPost[];
}

export const PostsList: FC<PostsListProps> = ({posts}) => {
  return (
    <ul className={styles.postsList}>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
