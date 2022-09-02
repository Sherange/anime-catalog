import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, FlatList, StyleSheet, StatusBar, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/core';

import AnimeCard from '../../components/AnimeCard/AnimeCard';
import AppLoader from '../../components/AppLoader/AppLoader';
import useAnime from '../../hooks/useAnime';
import {backgroundColor} from '../../constans/theme';

const MainScreen = props => {
  const {navigation, route} = props;
  const {params} = route;
  const isFocused = useIsFocused();
  const {fetchAnimeList, fetchNextPage} = useAnime();

  //get state from redux-store
  const {animeList, has_next_page, isLoading} = useSelector(
    state => state.anime,
  );

  //pagination
  const [page, setPage] = useState(1);

  //fetch anime list on tab change
  useEffect(() => {
    let queryParams = params;
    queryParams.page = page;
    fetchAnimeList(queryParams);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //fetch anime list on scroll
  const fetchMoreData = () => {
    if (has_next_page) {
      let queryParams = params;
      queryParams.page = page + 1;
      setPage(page + 1);
      fetchNextPage(queryParams);
    }
  };

  const renderFooter = () => {
    return <AppLoader />;
  };

  const navigateDetailScreen = id => {
    navigation.navigate('DetailScreen', id);
  };

  const renderItem = ({item}) => (
    <AnimeCard item={item} navigateDetailScreen={navigateDetailScreen} />
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'#000000'} />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleHeader}>Anime Catalog</Text>
      </View>

      {isLoading ? (
        <AppLoader />
      ) : (
        <FlatList
          data={animeList}
          renderItem={renderItem}
          keyExtractor={item => item.mal_id}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingTop: 40,
    backgroundColor: 'red',
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default MainScreen;
