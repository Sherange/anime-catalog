import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImageCard from '../ImageCard';

const DATA = {
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
    },
  },
};

it('ImageCard renders correctly', () => {
  renderer.create(<ImageCard images={DATA.images} />);
});
