import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  selectedTalent: null,
};

export const talents = createSlice({
  name: 'talents',
  initialState,
  reducers: {
    selectTalent: (state, action) => {
      state.selectedTalent = action.payload;
    },
  },
});

export const { selectTalent } = talents.actions;

export default talents.reducer;
