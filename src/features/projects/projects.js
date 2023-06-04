import { createSlice } from '@reduxjs/toolkit';
import { TalentUtils } from '../../utils/talents';
import { notifySuccess } from '../../utils/notification';

export const CREATE_PROJECT_MODAL = 'isCreateProjModalOpen';
export const DELETE_PROJECT_MODAL = 'isDeleteProjectModalOpen';
export const EDIT_PROJECT_MODAL = 'isEditProjModalOpen';
export const ADD_TALENT_TO_PROJECT_MODAL = 'isAddTalentToProjModalOpen';
export const REMOVE_TALENT_FROM_PROJECT_MODAL = 'isRemoveTalentFromProjModalOpen';
export const CLEAR_PROJECT_MODAL = 'isClearProjModalOpen';
export const TEMP_PROJ_MODAL = 'isTempProjModalOpen';

const initialState = {
  tempProject: [],
  talent: null,
  project: null,
  // Modals
  [CREATE_PROJECT_MODAL]: false,
  [DELETE_PROJECT_MODAL]: false,
  [EDIT_PROJECT_MODAL]: false,
  [ADD_TALENT_TO_PROJECT_MODAL]: false,
  [REMOVE_TALENT_FROM_PROJECT_MODAL]: false,
  [CLEAR_PROJECT_MODAL]: false,
  [TEMP_PROJ_MODAL]: false,
};

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modal = action.payload;
      state[modal] = true;
    },
    closeModal: (state, action) => {
      const modal = action.payload;
      state[modal] = false;
    },

    setTalent: (state, action) => {
      state.talent = action.payload;
    },
    getTempProj: (state) => {
      const data = TalentUtils.getProject();
      const talents = Object.values(data);
      state.tempProject = talents;
    },
    clearTempProj: (state) => {
      TalentUtils.clearProject();
      state.tempProject = [];
    },
    addTalentToProjectHandler: (state, actions) => {
      TalentUtils.addTalentToProject(actions?.payload);
      notifySuccess('You have added a talent to your project');
      const data = TalentUtils.getProject();
      const talents = Object.values(data);
      state.tempProject = talents;
    },
  },
});

export const {
  openModal,
  closeModal,
  setTalent,
  getTempProj,
  clearTempProj,
  addTalentToProjectHandler,
} = projects.actions;

export default projects.reducer;
