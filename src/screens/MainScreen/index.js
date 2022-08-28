import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AnimeCard from '../../components/AnimeCard/AnimeCard';

const MainScreen = ({data}) => {
  const renderItem = ({item}) => <AnimeCard item={item} />;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default MainScreen;
