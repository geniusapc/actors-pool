import axios from 'axios';
import { useQuery } from 'react-query';
import { SERVER_BASEURL } from '../config/keys';
import qs from 'qs';

const fetchTalent = (q) => {
  return axios.get(`${SERVER_BASEURL}/talents?${q}`);
};

const fetchTalentById = (id) => {
  return axios.get(`${SERVER_BASEURL}/talents/${id}`);
};

const useTalentsData = ({ query }) => {
  const q = qs.stringify(query);
  return useQuery(['talents', q], () => fetchTalent(q));
};

const useTalentsDataByID = (id) => {
  return useQuery(['talents', id], () => fetchTalentById(id));
};

export { useTalentsData, useTalentsDataByID };
