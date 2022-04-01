import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPost } from '../types/types';

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts/',
        { params: { _limit: 3 } }
      );

      setPosts(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.get<IPost[]>(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
        {
          params: { _limit: 3 },
        }
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
