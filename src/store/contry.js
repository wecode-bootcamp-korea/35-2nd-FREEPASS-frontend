import { createSlice } from '@reduxjs/toolkit';

let contry = createSlice({
  name: 'contry',
  initialState: { departure: '김포', destination: '어디로 떠나시나요?' },
  reducers: {
    clickCityDep(state, action) {
      state.departure = action.payload;
    },
    clickCityDes(state, action) {
      state.destination = action.payload;
    },
  },
});

export const { clickCityDep, clickCityDes } = contry.actions;

export default contry.reducer;
