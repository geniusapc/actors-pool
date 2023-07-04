import axios from '../config/axios';
import { useQuery } from 'react-query';

const fetchProfile = (q) => {
  return axios.get('/api/v1/users/my-profile');
};

const useProfileData = (options = {}) => {
  return useQuery(['my-user-profile'], () => fetchProfile(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
    ...options,
  });
};

export { useProfileData };
