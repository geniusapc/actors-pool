import axios from '../config/axios';
import { useQuery } from 'react-query';

const fetchProfile = (q) => {
  return axios.get('/api/v1/users/my-profile');
};

const useProfileData = () => {
  return useQuery(['my-talent-profile'], () => fetchProfile(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
  });
};

export { useProfileData };
