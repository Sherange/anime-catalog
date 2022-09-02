import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import ImageCard from './ImageCard';
import InfoCard from './InfoCard';
import useAnime from '../../hooks/useAnime';
import AppLoader from '../../components/AppLoader/AppLoader';
import {backgroundColor} from '../../constans/theme';

const DetailScreen = props => {
  const {getAnimeById} = useAnime();
  //get state from redux-store
  const {animeDetail} = useSelector(state => state.anime);
  //isLoading
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const id = props.route && props.route.params;
    if (id) {
      getAnimeById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animeDetail) {
      setIsloading(false);
    }
  }, [animeDetail]);

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <StatusBar backgroundColor={backgroundColor} barStyle={'dark-content'} />
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
    flexGrow: 1,
    backgroundColor: backgroundColor,
  },
});

export default DetailScreen;
