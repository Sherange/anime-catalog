import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {primaryLabel, secondryLabel} from '../../constans/theme';
import Genres from './Genres';

const AnimeCard = props => {
  const {images, title, type, genres} = props.item;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: images.jpg.image_url}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.typeStyle}>{type}</Text>
        <View style={styles.genresRow}>
          <Genres genres={genres} />
        </View>
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
  }),
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: 190,
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
    marginHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 2,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: primaryLabel,
  },
  typeStyle: {
    fontSize: 14,
    marginTop: 8,
    color: secondryLabel,
  },
  genresRow: {
    flexDirection: 'row',
  },
  genresStyle: {
    fontSize: 14,
    color: secondryLabel,
  },
});

export default AnimeCard;
