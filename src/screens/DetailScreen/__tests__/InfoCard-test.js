import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InfoCard from '../InfoCard';

const mockItem = {
  mal_id: 1,
  url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
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
  synopsis:
    "When mankind's savagery surpasses his fear of death, there is little hope for those who wish to live honest lives. Beneath a full moon, a young boy witnesses the murder of the bandits who had enslaved him, and is then christened with a new name by the man who rescued him. This boy is Shinta, now known as Kenshin Himura, and he is destined to become a swordsman. The softness of his heart does not befit the occupation, but his desire to protect the innocent is absolute. Rurouni Kenshin: Meiji Kenkaku Romantan - Tsuioku-hen details the origins of the man who would bear the name of Hitokiri Battousai long before he swore his oath not to kill and before he earned his reputation as an assassin. The young man's heart is divided between justice and corruption, while the fate of a nation rests on his actions. [Written by MAL Rewrite]",
};

it('AnimeCard renders correctly', () => {
  renderer.create(<InfoCard item={mockItem} />);
});
