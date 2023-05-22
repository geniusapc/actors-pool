import Cookies from 'js-cookie';
import { USER_AUTH_TOKEN_KEY, LOCAL_STORAGE_KEYS as LS } from '../constants';
class UserUtils {
  static saveLocalStoreItem = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  static saveUser = (user) => {
    Cookies.set(USER_AUTH_TOKEN_KEY, user?.accessToken);
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

  static removeCookie = () => {
    Cookies.remove(USER_AUTH_TOKEN_KEY);
  };

  static getUserToken = () => {
    const token = Cookies.get(USER_AUTH_TOKEN_KEY);
    return token;
  };
}

export { UserUtils };
