import axios from '../config/axios';
import { useQuery } from 'react-query';

import qs from 'qs';

const fetchTalent = (q) => {
  return axios.get(`/api/v1/talents?${q}`);
};

const fetchTalentById = (id) => {
  return axios.get(`/api/v1/talents/${id}`);
};
const fetchMyTalentProfile = (id) => {
  return axios.get(`/api/v1/talents/my-profile`);
};

const useMyTalentProfile = () => {
  return useQuery(['talent-my-profile'], () => fetchMyTalentProfile(), {
    retry: 1,
  });
};

const useTalentsData = ({ query }) => {
  const q = qs.stringify(query);
  return useQuery(['talents', q], () => fetchTalent(q), {
    retry: 1,
    transformResponse: (data) => data?.data,
  });
};

const useTalentsDataByID = (id) => {
  return useQuery(['talents', id], () => fetchTalentById(id));
};

export { useTalentsData, useMyTalentProfile, useTalentsDataByID };
