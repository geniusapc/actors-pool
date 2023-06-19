import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.js';
import settingsReducer from '../features/settings/settings.js';
import projectsReducer from '../features/projects/projects.js';
import profileReducer from '../features/profile/profile.js';
import talentsReducer from '../features/talents/talents.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    projects: projectsReducer,
    createProfile: profileReducer,
    talents: talentsReducer,
  },
});
