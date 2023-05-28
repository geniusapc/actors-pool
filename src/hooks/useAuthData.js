import axios from 'axios';
import { useMutation } from 'react-query';
import { SERVER_BASEURL } from '../config/keys';

const addSignUp = ({ data }) => {
  return axios.post(`${SERVER_BASEURL}/api/v1/auth/signup`, data);
};

const signin = ({ data }) => {
  return axios.post(`${SERVER_BASEURL}/api/v1/auth/signin`, data);
};

const useSignUp = (onError, onSuccess) => {
  return useMutation(addSignUp, { onError, onSuccess });
};

const useSignIn = (onError, onSuccess) => {
  return useMutation(signin, { onError, onSuccess });
};

export { useSignUp, useSignIn };
