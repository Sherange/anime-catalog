import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from '../index';

const mockData = [
  {
    mal_id: 1,
    url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Cowboy Bebop',
      },
      {
        type: 'Japanese',
        title: 'カウボーイビバップ',
      },
      {
        type: 'English',
        title: 'Cowboy Bebop',
      },
    ],
    title: 'Cowboy Bebop',
    title_english: 'Cowboy Bebop',
    title_japanese: 'カウボーイビバップ',
    title_synonyms: [],
    type: 'TV',
    source: 'Original',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    duration: '24 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 8.75,
    scored_by: 854073,
    rank: 38,
    popularity: 43,
    members: 1655018,
    favorites: 73476,

    year: 1998,
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
      },
    ],
    genres: [
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
    ],
    explicit_genres: [],
    demographics: [],
  },
  {
    mal_id: 2,
    url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Cowboy Bebop',
      },
      {
        type: 'Japanese',
        title: 'カウボーイビバップ',
      },
      {
        type: 'English',
        title: 'Cowboy Bebop',
      },
    ],
    title: 'Cowboy Bebop',
    title_english: 'Cowboy Bebop',
    title_japanese: 'カウボーイビバップ',
    title_synonyms: [],
    type: 'TV',
    source: 'Original',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    duration: '24 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 8.75,
    scored_by: 854073,
    rank: 38,
    popularity: 43,
    members: 1655018,
    favorites: 73476,

    year: 1998,
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
      },
    ],
    genres: [
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
    ],
    explicit_genres: [],
    demographics: [],
  },
];

it('MainScreen renders correctly', () => {
  renderer.create(<MainScreen item={mockData} />);
});

describe('<MainScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<MainScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
