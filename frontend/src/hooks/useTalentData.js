import qs from 'qs';
import { useQuery, useMutation } from 'react-query';
import axios from '../config/axios';

const fetchTalent = (q) => {
  return axios.get(`/api/v1/talents?${q}`);
};

const fetchTalentByUsername = (username) => {
  return axios.get(`/api/v1/talents/${username}`);
};

const fetchTrailBlazers = () => {
  return axios.get(`/api/v1/talents/blazzers`);
};

const fetchTopTalent = () => {
  return axios.get(`/api/v1/talents/top-talents`);
};
const fetchMyTalentProfile = (id) => {
  return axios.get(`/api/v1/talents/my-profile`);
};

const addTalentProfile = (data) => {
  return axios.postForm(`/api/v1/talents`, data, {
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
const bulkUpdateTalentStatus = (data) => {
  return axios.patch(`/api/v1/talents/status`, data);
};
const bulkUpdateTalentVisibility = (data) => {
  return axios.patch(`/api/v1/talents/visibility`, data);
};

const bulkDeleteTalents = (data) => {
  return axios.delete(`/api/v1/talents`, { data });
};

// ______________________________________________________________________

const useMyTalentProfile = (options = {}) => {
  return useQuery(['talent-my-profile'], () => fetchMyTalentProfile(), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
    ...options,
  });
};

const useTalentsData = (options) => {
  const { query, options: useQueryOptions = {} } = options || {};
  const q = qs.stringify(query);
  return useQuery(['talents', q], () => fetchTalent(q), {
    refetchOnWindowFocus: false,
    retry: false,
    ...useQueryOptions,
  });
};

const useTalentsDataByUsername = (username) => {
  return useQuery(['talent', username], () => fetchTalentByUsername(username), {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 30000,
  });
};

const useTrailBlazzer = () => {
  return useQuery(['trail-blazzers'], fetchTrailBlazers);
};
const useTopTalents = () => {
  return useQuery(['top-talents'], fetchTopTalent);
};

const useAddTalent = (onError, onSuccess) => {
  return useMutation(addTalentProfile, { onError, onSuccess });
};

const useEditTalent = (onError, onSuccess) => {
  return useMutation(editTalentProfile, { onError, onSuccess });
};

const useBulkUpdateTalentStatus = (onError, onSuccess) => {
  return useMutation(bulkUpdateTalentStatus, { onError, onSuccess });
};

const useBulkUpdateTalentVisibility = (onError, onSuccess) => {
  return useMutation(bulkUpdateTalentVisibility, { onError, onSuccess });
};
const useBulkDeleteTalent = (onError, onSuccess) => {
  return useMutation(bulkDeleteTalents, { onError, onSuccess });
};

export {
  useTalentsData,
  useMyTalentProfile,
  useTalentsDataByUsername,
  useAddTalent,
  useEditTalent,
  useTrailBlazzer,
  useTopTalents,
  useBulkUpdateTalentStatus,
  useBulkUpdateTalentVisibility,
  useBulkDeleteTalent,
};
