import {useDispatch} from 'react-redux';
import axios from 'axios';

import {
  setAnimeList,
  setAnimeMoreData,
  setHasNextPage,
  setCurrentPage,
} from '../redux/animeSlice';
import {baseUrl, endPoints} from '../constans/api';

const useAnime = () => {
  const dispatch = useDispatch();

  const fetchAnimeList = async page => {
    try {
      const responce = await axios.get(baseUrl + endPoints.animeList, {
        headers: {Accept: 'application/json'},
        params: {page},
      });

      if (responce && responce.status === 200) {
        if (page === 1) {
          dispatch(setAnimeList(responce.data.data));
        } else {
          dispatch(setAnimeMoreData(responce.data.data));
        }

        dispatch(setHasNextPage(responce.data.pagination.has_next_page));
        dispatch(setCurrentPage(responce.data.pagination.current_page));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {fetchAnimeList};
};

export default useAnime;
