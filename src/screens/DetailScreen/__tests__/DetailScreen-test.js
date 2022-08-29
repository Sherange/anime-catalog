import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Provider} from 'react-redux';

import DetailScreen from '../index';
import {store} from '../../../redux/store';

it('DetailScreen renders correctly', async () => {
  await act(async () =>
    renderer.create(
      <Provider store={store}>
        <DetailScreen />
      </Provider>,
    ),
  );
});
