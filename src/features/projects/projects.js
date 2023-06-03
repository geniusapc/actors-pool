import { createSlice } from '@reduxjs/toolkit';
import { TalentUtils } from '../../utils/talents';
import { notifySuccess } from '../../utils/notification';

const initialState = {
  isTempProjModalOpen: false,
  isProjModalOpen: false,
  tempProject: [],
};

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    openTempProjModal: (state) => {
      state.isTempProjModalOpen = true;
    },
    closeTempProjModal: (state) => {
      state.isTempProjModalOpen = false;
    },
    openProjModal: (state) => {
      state.isProjModalOpen = true;
    },
    closeProjModal: (state) => {
      state.isProjModalOpen = false;
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
  openTempProjModal,
  closeTempProjModal,
  openProjModal,
  closeProjModal,
  getTempProj,
  clearTempProj,
  addTalentToProjectHandler,
} = projects.actions;

export default projects.reducer;
