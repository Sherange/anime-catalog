import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.detailContainer}>
      <Text>Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
