import { createSlice } from '@reduxjs/toolkit';

export let borad = createSlice({
  name: 'borad',
  initialState: {
    boardStartDay: '탑승일을 선택하세요.',
    boardEndDay: '',
    search: '검색',
  },
  reducers: {
    setBoardStartDay(state, action) {
      state.boardStartDay = action.payload;
    },
    setBoardEndDay(state, action) {
      state.boardEndDay = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setBoardStartDay, setBoardEndDay, setSearch } = borad.actions;

export default borad.reducer;
