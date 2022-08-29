import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Provider} from 'react-redux';

import MainScreen from '../index';
import {store} from '../../../redux/store';

it('MainScreen renders correctly', async () => {
  await act(async () =>
    renderer.create(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    ),
  );
});

describe('<MainScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MainScreen />
        </Provider>,
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
