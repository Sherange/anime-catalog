/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import DetailScreen from './src/screens/DetailScreen';
import {backgroundColor} from './src/constans/theme';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} />
      <DetailScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default App;
