import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, FlatList, StyleSheet} from 'react-native';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import AppLoader from '../../components/AppLoader/AppLoader';
import useAnime from '../../hooks/useAnime';

const MainScreen = () => {
  const {fetchAnimeList} = useAnime();
  //get state from redux-store
  const {animeList} = useSelector(state => state.anime);

  //isLoading
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchAnimeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animeList && animeList.length > 0) {
      setIsloading(false);
    }
  }, [animeList]);

  const renderItem = ({item}) => <AnimeCard item={item} />;

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <AppLoader />
      ) : (
        <FlatList
          data={animeList}
          renderItem={renderItem}
          keyExtractor={item => item.mal_id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default MainScreen;
