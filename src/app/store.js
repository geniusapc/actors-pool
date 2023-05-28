import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.js';
import settingsReducer from '../features/settings/settings.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
  },
});
