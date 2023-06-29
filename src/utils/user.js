import Cookies from 'js-cookie';
import { USER_AUTH_TOKEN_KEY, LOCAL_STORAGE_KEYS as LS } from '../constants';
class UserUtils {
  static saveLocalStoreItem = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  static saveUser = (user) => {
    Cookies.set(USER_AUTH_TOKEN_KEY, `Bearer ${user?.accessToken}`);
    const payload = {
      _id: user?._id,
      firstname: user?.firstname,
      lastname: user?.lastname,
      photo: user?.photo,
    };
    UserUtils.saveLocalStoreItem(LS.USER_KEY, payload);
  };

  static addCookie = (token) => {
    Cookies.set(USER_AUTH_TOKEN_KEY, token);
  };

  static isLoggedIn = !!Cookies.get(USER_AUTH_TOKEN_KEY);

  static removeCookie = () => {
    Cookies.remove(USER_AUTH_TOKEN_KEY);
  };

  static getUserToken = () => {
    return Cookies.get(USER_AUTH_TOKEN_KEY);
  };
}

export { UserUtils };
