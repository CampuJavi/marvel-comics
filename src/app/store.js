import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/slices/authSlice';
import { comicsApi } from '../redux/api/comic';

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [comicsApi.reducerPath]: comicsApi.reducer,
  },
});
