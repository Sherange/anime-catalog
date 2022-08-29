import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RatingCard from '../RatingCard';

it('RatingCard renders correctly', () => {
  renderer.create(<RatingCard title="Rank" rate={10} />);
});

test('RatingCard snapshot', () => {
  const snapshot = renderer
    .create(<RatingCard title="Rank" rate={10} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
