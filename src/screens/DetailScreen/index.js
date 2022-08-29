import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ImageCard from './ImageCard';
import InfoCard from './InfoCard';
import useAnime from '../../hooks/useAnime';
import AppLoader from '../../components/AppLoader/AppLoader';
import {backgroundColor} from '../../constans/theme';

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
    <ScrollView style={styles.detailContainer}>
      {isLoading ? (
        <AppLoader />
      ) : (
        <>
          <SafeAreaView>
            <ImageCard images={animeDetail.images} />
          </SafeAreaView>

          <InfoCard item={animeDetail} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default DetailScreen;
