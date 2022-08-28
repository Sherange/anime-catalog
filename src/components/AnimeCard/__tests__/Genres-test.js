import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Genres from '../Genres';

const mockData = [
  {
    mal_id: 1,
    type: 'anime',
    name: 'Action',
    url: 'https://myanimelist.net/anime/genre/1/Action',
  },
  {
    mal_id: 24,
    type: 'anime',
    name: 'Sci-Fi',
    url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
  },
];

it('Genres renders correctly', () => {
  renderer.create(<Genres genres={mockData} />);
});
