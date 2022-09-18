import { configureStore } from '@reduxjs/toolkit';
import cityImageReducer from './city';
import contryReducer from './contry';
import passengerReducer from './passenger';
import boardDayReducer from './board';

export default configureStore({
  reducer: {
    cityImageData: cityImageReducer,
    contry: contryReducer,
    passengerInfo: passengerReducer,
    board: boardDayReducer,
  },
});
