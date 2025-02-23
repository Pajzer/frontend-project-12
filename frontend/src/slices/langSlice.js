import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: 'ru',
};

const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.currentLanguage = payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;