import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AppLoader from '../AppLoader';

it('AppLoader renders correctly', () => {
  renderer.create(<AppLoader />);
});
