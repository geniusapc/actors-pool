import { createSlice } from '@reduxjs/toolkit';
import { UserUtils } from '../../utils/user';

const { saveUser, isLoggedIn, getLoggedInUser } = UserUtils;

const initialState = {
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
  isForgotPwdModalOpen: false,
  isAuthenticated: isLoggedIn,
  currentLoggedInUser: getLoggedInUser(),
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
    openForgotPwdModal: (state) => {
      state.isForgotPwdModalOpen = true;
    },
    openChangePasswordModal: (state) => {
      state.isChangePasswordModalOpen = true;
    },

    closeSignInModal: (state) => {
      state.isSignInModalOpen = false;
    },
    closeForgotPwdModal: (state) => {
      state.isForgotPwdModalOpen = false;
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false;
    },

    authenticate: (state, data) => {
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
  openForgotPwdModal,
  openSignUpModal,
  openChangePasswordModal,
  closeSignInModal,
  closeForgotPwdModal,
  closeSignUpModal,
  authenticate,
  logout,
} = auth.actions;

export default auth.reducer;
