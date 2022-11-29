import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
