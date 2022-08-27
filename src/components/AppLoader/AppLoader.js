import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const AppLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoader;
