import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.favContainer}>
      <Text>Favourite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  favContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavouriteScreen;
