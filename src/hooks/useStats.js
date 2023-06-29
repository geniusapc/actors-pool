import axios from '../config/axios';
import { useQuery } from 'react-query';

const fetchStats = (q) => {
  return axios.get('/api/v1/stats');
};

const useDashbordStatData = () => {
  return useQuery(['dashbord-stats'], () => fetchStats(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
  });
};

export { useDashbordStatData };
