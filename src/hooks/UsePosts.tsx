import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPost } from '../types/types';

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    console.log(1111);

    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=3'
      );

      setPosts(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts?userId=4'
      );

      setPosts(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, fetchUserPosts };
};
