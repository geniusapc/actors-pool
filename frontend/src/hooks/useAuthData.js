import axios from '../config/axios';
import { useMutation } from 'react-query';

const addSignUp = ({ data }) => {
  return axios.post(`/api/v1/auth/signup`, data);
};

const signin = ({ data }) => {
  return axios.post(`/api/v1/auth/signin`, data);
};

const forgotPwd = ({ data }) => {
  return axios.post(`/api/v1/auth/forgot-password`, data);
};

const changePassword = ({ data }) => {
  return axios.post(`/api/v1/auth/change-password`, data);
};

const useSignUp = (onError, onSuccess) => {
  return useMutation(addSignUp, { onError, onSuccess });
};

const useSignIn = (onError, onSuccess) => {
  return useMutation(signin, { onError, onSuccess });
};

const useForgotPwd = (onError, onSuccess) => {
  return useMutation(forgotPwd, { onError, onSuccess });
};

const useChangePassword = (onError, onSuccess) => {
  return useMutation(changePassword, { onError, onSuccess });
};

export { useSignUp, useSignIn, useChangePassword, useForgotPwd };
