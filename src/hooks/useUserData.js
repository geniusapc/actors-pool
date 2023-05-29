import axios from '../config/axios';
import { useQuery } from 'react-query';

const fetchProfile = (q) => {
  return axios.get('/api/v1/users/my-profile');
};

const useProfileData = () => {
  return useQuery(['talents-profile'], () => fetchProfile(), {
    retry: 1,
  });
};

export { useProfileData };
