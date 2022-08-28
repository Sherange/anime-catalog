import {useDispatch} from 'react-redux';
import axios from 'axios';

import {setAnimeList} from '../redux/animeSlice';
import {baseUrl, endPoints} from '../constans/api';

const useAnime = () => {
  const dispatch = useDispatch();
  const fetchAnimeList = async () => {
    try {
      const responce = await axios.get(baseUrl + endPoints.animeList, {
        headers: {Accept: 'application/json'},
      });

      if (responce && responce.status === 200) {
        dispatch(setAnimeList(responce.data.data));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return {fetchAnimeList};
};

export default useAnime;
