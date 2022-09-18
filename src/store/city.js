import { createSlice } from '@reduxjs/toolkit';

export let cityImageData = createSlice({
  name: 'cityImageData',
  initialState: [],
  reducers: {
    setCityImageData(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setCityImageData } = cityImageData.actions;

export default cityImageData.reducer;
