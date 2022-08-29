import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageCard from './ImageCard';
import InfoCard from './InfoCard';

const DetailScreen = () => {
  return (
    <View style={styles.detailContainer}>
      <ImageCard />
      <InfoCard />
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
