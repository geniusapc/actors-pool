import { createSlice } from '@reduxjs/toolkit';
import { UserUtils } from '../../utils/user';

const initialState = {
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
  isChangePasswordModalOpen: false,
  isAuthenticated: UserUtils.isLoggedIn,
};

const { saveUser } = UserUtils;

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
    openChangePasswordModal: (state) => {
      state.isChangePasswordModalOpen = true;
    },

    closeSignInModal: (state) => {
      state.isSignInModalOpen = false;
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false;
    },
    closeChangePasswordModal: (state) => {
      state.isChangePasswordModalOpen = false;
    },
    authenticate: (state, data) => {
      console.log(data.payload?.data);
      saveUser(data.payload?.data);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      UserUtils.removeCookie();
      state.isAuthenticated = false;
    },
  },
});

export const {
  openSignInModal,
  openSignUpModal,
  openChangePasswordModal,
  closeSignInModal,
  closeSignUpModal,
  closeChangePasswordModal,
  authenticate,
  logout,
} = auth.actions;

export default auth.reducer;
