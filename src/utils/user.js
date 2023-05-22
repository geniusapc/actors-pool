import Cookies from 'js-cookie';
import { USER_AUTH_TOKEN_KEY } from '../constants';
class UserUtils {
  static saveLocalStoreItem = ({ name, data }) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  static saveUser = (user) => {
    // console.log(user);
    Cookies.set(USER_AUTH_TOKEN_KEY, user);
  };

  static removeCookie = () => {
    Cookies.remove(USER_AUTH_TOKEN_KEY);
  };

  static getUserToken = () => {
    const token = Cookies.get(USER_AUTH_TOKEN_KEY);
    return token;
  };
}

export { UserUtils };
