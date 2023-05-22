import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openSignInModal: (state) => {
      state.isSignInModalOpen = true;
    },
    openSignUpModal: (state) => {
      state.isSignUpModalOpen = true;
    },

    closeSignInModal: (state, action) => {
      state.isSignInModalOpen = false;
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false;
    },
    isAuthenticated: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openSignInModal, openSignUpModal, closeSignInModal, closeSignUpModal } =
  auth.actions;

export default auth.reducer;
