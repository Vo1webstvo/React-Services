import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './countrySlice/countrySlice';

export const store = configureStore({
  reducer: {
    countryData: countrySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
