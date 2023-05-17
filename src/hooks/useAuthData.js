import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { SERVER_BASEURL } from '../config/keys';
import qs from 'qs';

const addSignUp = ({ data }) => {
  return axios.post(`${SERVER_BASEURL}/auth/signup`, data);
};

const useSignUp = (onError, onSuccess) => {
  return useMutation(addSignUp, { onError, onSuccess });
};

export { useSignUp };
