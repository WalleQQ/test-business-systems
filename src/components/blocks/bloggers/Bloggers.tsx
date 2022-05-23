import React, {useEffect, useState} from 'react';
import {usePosts} from '../../../hooks/UsePosts';
import {useUsers} from '../../../hooks/useUsers';
import {PostsList} from '../../posts-list/PostsList';
import {Users} from '../../users/Users';
import styles from './Bloggers.module.css';

export const Bloggers = () => {
  const {posts, error, fetchUserPosts} = usePosts();
  const {users, usersLoading, usersError} = useUsers();
  const [currentUserInfo, setCurrentUserInfo] = useState<
    {id: number; name: string} | undefined
  >();

  useEffect(() => {
    if (users.length) {
      const firstUserId = users[0].id;
      const fistUserName = users[0].name;

      setCurrentUserInfo({id: firstUserId, name: fistUserName});
    }
  }, [users]);

  useEffect(() => {
    if (currentUserInfo) fetchUserPosts(currentUserInfo.id);
  }, [currentUserInfo]);

  return (
    <section className={styles.bloggers}>
      <h2 className={styles.bloggers__title}>Наши топ-блогеры</h2>
      <p className={styles.bloggers__text}>
        Лучше специалисты в своем деле, средний&nbsp;опыт&nbsp;работы в
        профессии - 27 лет
      </p>
      <Users
        setCurrentUserInfo={setCurrentUserInfo}
        users={users}
        usersLoading={usersLoading}
        usersError={usersError}
      />
      <div className={styles.posts}>
        <h2 className={styles.postsTitle}>
          3 актуальных поста {currentUserInfo?.name}
        </h2>
        {error ? (
          <p className={styles.error}>
            Произошло что-то ужасное...Попробуй снова
          </p>
        ) : (
          <PostsList posts={posts} />
        )}
      </div>
    </section>
  );
};
