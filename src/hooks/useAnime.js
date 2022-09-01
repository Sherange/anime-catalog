import {useDispatch} from 'react-redux';
import axios from 'axios';

import {
  setAnimeList,
  setAnimeMoreData,
  setHasNextPage,
  setCurrentPage,
  setAnimeDetail,
  setIsLoading,
} from '../redux/animeSlice';
import {baseUrl, endPoints} from '../constans/api';

const useAnime = () => {
  const dispatch = useDispatch();

  const fetchAnimeList = async params => {
    dispatch(setIsLoading(true));
    dispatch(setAnimeList([]));
    try {
      const responce = await axios.get(baseUrl + endPoints.animeList, {
        headers: {Accept: 'application/json'},
        params: params,
      });
      if (responce && responce.status === 200) {
        dispatch(setAnimeList(responce.data.data));
        dispatch(setHasNextPage(responce.data.pagination.has_next_page));
        dispatch(setCurrentPage(responce.data.pagination.current_page));
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const fetchNextPage = async params => {
    try {
      const responce = await axios.get(baseUrl + endPoints.animeList, {
        headers: {Accept: 'application/json'},
        params: params,
      });

      if (responce && responce.status === 200) {
        dispatch(setAnimeMoreData(responce.data.data));
        dispatch(setHasNextPage(responce.data.pagination.has_next_page));
        dispatch(setCurrentPage(responce.data.pagination.current_page));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getAnimeById = async id => {
    try {
      const responce = await axios.get(baseUrl + endPoints.amime + id, {
        headers: {Accept: 'application/json'},
      });

      if (responce && responce.status === 200) {
        dispatch(setAnimeDetail(responce.data.data));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {fetchAnimeList, fetchNextPage, getAnimeById};
};

export default useAnime;
