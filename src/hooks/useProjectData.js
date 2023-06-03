import axios from '../config/axios';
import { useQuery } from 'react-query';

import qs from 'qs';

const fetchProjects = (q) => {
  return axios.get(`/api/v1/projects?${q}`);
};

const fetchProjectById = (id) => {
  return axios.get(`/api/v1/projects/${id}`);
};

const useProjectsData = (options) => {
  const { query } = options || {};
  const q = qs.stringify(query);
  return useQuery(['projects', q], () => fetchProjects(q), {
    retry: 1,
  });
};

const useProjectDataByID = (id) => {
  return useQuery(['project', id], () => fetchProjectById(id));
};

export { useProjectsData, useProjectDataByID };
