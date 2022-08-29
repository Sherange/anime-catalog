import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import ImageCard from './ImageCard';
import InfoCard from './InfoCard';
import useAnime from '../../hooks/useAnime';
import AppLoader from '../../components/AppLoader/AppLoader';

const DetailScreen = () => {
  const {getAnimeById} = useAnime();
  //get state from redux-store
  const {animeDetail} = useSelector(state => state.anime);
  //isLoading
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getAnimeById(44);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animeDetail) {
      setIsloading(false);
    }
  }, [animeDetail]);

  return (
    <View style={styles.detailContainer}>
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          <ImageCard images={animeDetail.images} />
          <InfoCard item={animeDetail} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DetailScreen;
