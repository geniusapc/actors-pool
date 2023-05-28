import axios from 'axios';
import { useQuery } from 'react-query';
import { SERVER_BASEURL } from '../config/keys';
import qs from 'qs';

const fetchTalent = (q) => {
  return axios.get(`${SERVER_BASEURL}/api/v1/talents?${q}`);
};

const fetchTalentById = (id) => {
  return axios.get(`${SERVER_BASEURL}/api/v1/talents/${id}`);
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

export { useTalentsData, useTalentsDataByID };
