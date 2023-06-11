import { LOCAL_STORAGE_KEYS as LS } from '../constants';

class TalentUtils {
  static saveLocalStoreItem = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  static getProject = () => {
    let talents = localStorage.getItem(LS.PROJECT_KEY);
    talents = JSON.parse(talents) || {};
    return talents;
  };

  static addTalentToProject = (talent) => {
    const payload = {
      _id: talent._id,
      username: talent.username,
      firstname: talent?.firstname,
      lastname: talent?.lastname,
      photo: talent?.photo,
      profession: talent?.profession,
      activeSince: talent?.activeSince,
      gallery: talent?.gallery || [],
    };

    let talents = TalentUtils.getProject();
    talents[talent?._id] = payload;

    TalentUtils.saveLocalStoreItem(LS.PROJECT_KEY, talents);
  };

  static clearProject = () => {
    localStorage.clear(LS.PROJECT_KEY);
  };
}

export { TalentUtils };
