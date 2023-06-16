import axios from '../config/axios';
import { useQuery, useMutation } from 'react-query';

import qs from 'qs';

const fetchTalent = (q) => {
  return axios.get(`/api/v1/talents?${q}`);
};

const fetchTalentByUsername = (username) => {
  return axios.get(`/api/v1/talents/${username}`);
};
const fetchMyTalentProfile = (id) => {
  return axios.get(`/api/v1/talents/my-profile`);
};

const addTalentProfile = (data) => {
  return axios.postForm(`/api/v1/talents/my-profile`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const editTalentProfile = ({ id, data }) => {
  return axios.patchForm(`/api/v1/talents/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const useMyTalentProfile = () => {
  return useQuery(['talent-my-profile'], () => fetchMyTalentProfile(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
  });
};

const useTalentsData = (options) => {
  const { query } = options || {};
  const q = qs.stringify(query);
  return useQuery(['talents', q], () => fetchTalent(q), {
    retry: 1,
  });
};

const useTalentsDataByUsername = (username) => {
  return useQuery(['talent', username], () => fetchTalentByUsername(username));
};

const useAddTalent = (onError, onSuccess) => {
  return useMutation(addTalentProfile, { onError, onSuccess });
};

const useEditTalent = (onError, onSuccess) => {
  return useMutation(editTalentProfile, { onError, onSuccess });
};

export {
  useTalentsData,
  useMyTalentProfile,
  useTalentsDataByUsername,
  useAddTalent,
  useEditTalent,
};
