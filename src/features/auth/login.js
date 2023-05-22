import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = login.actions;

export default login.reducer;
