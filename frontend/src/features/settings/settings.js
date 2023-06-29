import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChangePasswordModalOpen: false,
  isShareProfileModalOpen: false,
  isDeleteModalOpen: false,
};

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openChangePasswordModal: (state) => {
      state.isChangePasswordModalOpen = true;
    },
    closeChangePasswordModal: (state) => {
      state.isChangePasswordModalOpen = false;
    },
    openShareProfileModal: (state) => {
      state.isShareProfileModalOpen = true;
    },
    closeShareProfileModal: (state) => {
      state.isShareProfileModalOpen = false;
    },
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const {
  openChangePasswordModal,
  closeChangePasswordModal,
  openShareProfileModal,
  closeShareProfileModal,
  openDeleteModal,
  closeDeleteModal,
} = settings.actions;

export default settings.reducer;
