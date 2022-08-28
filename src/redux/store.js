import {configureStore} from '@reduxjs/toolkit';
import animeSlice from './animeSlice';

export const store = configureStore({
  reducer: {
    anime: animeSlice,
  },
});
