import axios from 'axios';
import {useEffect, useState} from 'react';
import {IUser} from '../types/types';

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState(false);

  const fetchUsers = async () => {
    try {
      setUsersLoading(true);
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users',
        {params: {_limit: 10}}
      );

      setUsers(response.data);
    } catch (e) {
      setUsersError(true);
    } finally {
      setUsersLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {users, usersLoading, usersError};
};
