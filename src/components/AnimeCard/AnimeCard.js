import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {primaryLabel, primaryColor, secondryLabel} from '../../constans/theme';
import Genres from './Genres';

const AnimeCard = props => {
  const {images, title, type, genres, rating, score, year} = props.item;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: images.jpg.image_url}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.typeStyle}>{type}</Text>
        <View style={styles.genresRow}>
          <Genres genres={genres} />
        </View>
        <Text style={styles.ratingStyle}>{rating}</Text>

        <Text style={styles.scoreTextStyle}>{score}</Text>
        <Text style={styles.yearTextStyle}>
          {'Y :'} {year == null ? 'N/A' : year}
        </Text>
      </View>
    </View>
  );
};

AnimeCard.propTypes = {
  item: PropTypes.shape({
    images: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    genres: PropTypes.array,
    rating: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    year: PropTypes.number,
  }),
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 168,
    justifyContent: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 30,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  contentContainer: {
    flex: 2,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: primaryLabel,
  },
  typeStyle: {
    fontSize: 12,
    marginTop: 8,
    color: secondryLabel,
  },
  genresRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ratingStyle: {
    fontSize: 12,
    color: secondryLabel,
  },
  yearTextStyle: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    color: secondryLabel,
  },
  scoreTextStyle: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    color: primaryColor,
  },
  yearContentRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default AnimeCard;
