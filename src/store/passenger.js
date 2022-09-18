import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adult: 1,
  child: 0,
  baby: 0,
  rating: '전체',
};

export let passengerInfo = createSlice({
  name: 'passengerInfo',
  initialState,
  reducers: {
    plusPassenger(state, action) {
      state[action.payload]++;
    },
    minusPassenger(state, action) {
      state[action.payload]--;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export const { plusPassenger, minusPassenger, setRating } =
  passengerInfo.actions;

export default passengerInfo.reducer;
