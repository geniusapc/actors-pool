import { createSlice } from '@reduxjs/toolkit';

const profileStages = [
  {
    title: 'Personal Information',
    caption: 'Set Up Your Talent Profile',
    isCompleted: false,
    data: null,
  },
  {
    title: 'About Me',
    caption: 'Set Up Your Talent Profile',
    isCompleted: false,
    data: null,
  },
  {
    title: 'Works/Movies',
    caption: 'Set Up Your Talent Profile',
    isCompleted: false,
    data: null,
  },
  {
    title: 'Gallery',
    caption: 'Set Up Your Talent Profile',
    isCompleted: false,
    data: null,
  },
  {
    title: 'Social Accounts',
    caption: 'Set Up Your Talent Profile',
    isCompleted: false,
    data: null,
  },
];

const initialState = {
  step: 1,
  stages: profileStages,
};

export const projects = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    previousStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    nextStep: (state) => {
      if (state.step < state.stages.length) state.step += 1;
    },

    setFormData: (state, action) => {
      const step = action.payload.step;
      const data = action.payload.data;
      state.stages[step - 1].data = data;
    },
  },
});

export const { nextStep, previousStep, setFormData } = projects.actions;

export default projects.reducer;
