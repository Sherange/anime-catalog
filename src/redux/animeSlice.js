import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  animeList: [],
  has_next_page: true,
  current_page: 0,
  animeDetail: null,
  isLoading: false,
};

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      state.animeList = action.payload;
    },
    setAnimeMoreData: (state, action) => {
      state.animeList = [...state.animeList, ...action.payload];
    },
    setHasNextPage: (state, action) => {
      state.has_next_page = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.current_page = action.payload;
    },
    setAnimeDetail: (state, action) => {
      state.animeDetail = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAnimeList,
  setAnimeMoreData,
  setHasNextPage,
  setCurrentPage,
  setAnimeDetail,
  setIsLoading,
} = animeSlice.actions;

export default animeSlice.reducer;
