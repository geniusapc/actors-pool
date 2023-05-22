import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/login.js';
import signupReducer from '../features/auth/signup.js';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});
