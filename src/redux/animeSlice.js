import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  animeList: [],
};

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      state.animeList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAnimeList} = animeSlice.actions;

export default animeSlice.reducer;
