import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import DetailScreen from '../index';
import {store} from '../../../redux/store';

it('DetailScreen renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <DetailScreen />
    </Provider>,
  );
});
