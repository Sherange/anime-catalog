import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Main Scren</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;