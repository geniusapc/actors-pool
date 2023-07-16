import axios from '../config/axios';
import { useMutation, useQuery } from 'react-query';

import qs from 'qs';
import { UserUtils } from '../utils/user';

const fetchProjects = (q) => {
  return axios.get(`/api/v1/projects?${q}`);
};

const fetchProjectById = (id) => {
  return axios.get(`/api/v1/projects/${id}`);
};

const addProject = (data) => {
  return axios.post(`/api/v1/projects`, data);
};

const deleteProject = (id) => {
  return axios.delete(`/api/v1/projects/${id}`);
};

const editProject = ({ id, data }) => {
  return axios.patch(`/api/v1/projects/${id}`, data);
};

const clearProjectTalent = (id) => {
  return axios.delete(`/api/v1/projects/${id}/talents`);
};

const deleteTalentFromProject = ({ projectId, talentId }) => {
  return axios.delete(`/api/v1/projects/${projectId}/talents/${talentId}`);
};

const useProjectsData = (options) => {
  const { query, options: useQueryOptions = {} } = options || {};
  const q = qs.stringify(query);
  return useQuery(['my-projects', q], () => fetchProjects(q), {
    retry: false,
    ...useQueryOptions,
  });
};

const useProjectDataByID = (id, options = {}) => {
  return useQuery(['project', id], () => fetchProjectById(id), { ...options });
};

const useAddProject = (onError, onSuccess) => {
  return useMutation(addProject, { onError, onSuccess });
};

const useDeleteProject = (onError, onSuccess) => {
  return useMutation(deleteProject, { onError, onSuccess });
};

const useEditProject = (onError, onSuccess) => {
  return useMutation(editProject, { onError, onSuccess });
};

const useClearProjectTalents = (onError, onSuccess) => {
  return useMutation(clearProjectTalent, { onError, onSuccess });
};

const useDeleteTalentFromProject = (onError, onSuccess) => {
  return useMutation(deleteTalentFromProject, { onError, onSuccess });
};

export {
  useProjectsData,
  useProjectDataByID,
  useAddProject,
  useDeleteProject,
  useEditProject,
  useClearProjectTalents,
  useDeleteTalentFromProject,
};
