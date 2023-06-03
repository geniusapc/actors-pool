import axios from '../config/axios';
import { useQuery } from 'react-query';
import { UserUtils } from '../utils/user';

const fetchProfile = (q) => {
  return axios.get('/api/v1/users/my-profile');
};

const useProfileData = () => {
  return useQuery(['talents-profile'], () => fetchProfile(), {
    retry: 1,
    onError: (err) => {
      if (err?.response?.status === 401) UserUtils.removeCookie();
    },
  });
};

export { useProfileData };
