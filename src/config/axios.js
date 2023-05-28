import axios from 'axios';
import { SERVER_BASEURL } from './keys';
import { UserUtils } from '../utils/user';

const instance = axios.create({
  baseURL: SERVER_BASEURL,
});

instance.defaults.headers.common['Authorization'] = UserUtils.getUserToken();

export default instance;
